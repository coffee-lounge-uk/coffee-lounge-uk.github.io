import { MenuService } from './../../services/menu.service';
import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderComponent } from "../order/order.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [OrderComponent, CurrencyPipe ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
	item?: MenuItem;

  constructor(private route: ActivatedRoute, private menuService: MenuService) {
    this.route.paramMap.subscribe(params => {
			const itemId = params.get('id'); 
			console.log("Reached item id", itemId);
			if (itemId)
				this.item = this.menuService.getItemById(itemId);
    });
  }
}
