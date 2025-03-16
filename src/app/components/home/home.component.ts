import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { MenuService } from '../../services/menu.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuCategoryItem } from '../../interfaces/menu-category-item.interface';
import { MenuCategory } from '../../enums/menu-category.enum';
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent, AboutComponent, CurrencyPipe, NgbModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	specials: MenuItem[] = [];

  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit() {
		var partyItem: MenuItem = {
			Id: 0,
			Name: "We take order for Party",
			Description: "We take order for Party, Wedding, Birthday, Office Party, etc. Please call us for more details.",
			Price: 0,
			IsSpecial: true,
			Category: MenuCategory.BangladeshiStreetFood,
			ImagePath: "assets/images/party.jpeg"
		};
    this.specials = [partyItem, ...this.menuService.getSpecialItems()];
  }

	goToItem(id: number) {
		if (id == 0) {
			this.router.navigate([`/order`]);
		}
		else {
			this.router.navigate([`/item/${id}`]);
		}
	}
}
