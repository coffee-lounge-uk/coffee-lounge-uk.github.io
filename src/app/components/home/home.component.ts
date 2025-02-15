import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuCategoryItem } from '../../interfaces/menu-category-item.interface';
import { MenuCategory } from '../../enums/menu-category.enum';
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	specials: MenuItem[] = [];
  menuCategories: MenuCategoryItem[] = [];
  currentSpecialIndex: number = 0;
  private intervalId: any;

  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit() {
    this.specials = this.menuService.getSpecialItems();
    this.menuCategories = this.menuService.getCategories();
    
    this.startSlideshow();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide() {
		this.currentSpecialIndex = (this.currentSpecialIndex + this.specials.length - 1) % this.specials.length;
  }

  nextSlide() {
		this.currentSpecialIndex = (this.currentSpecialIndex + 1) % this.specials.length;
  }

	goToItem(id: number) {
		this.router.navigate([`/item/${id}`]);
	}
}
