import { Component } from '@angular/core';
import { HeroComponent } from '@/components/hero/hero.component';
import { HERO_FEATURES } from '@/constants/hero-feature-description.constant';
import { HeaderComponent } from "../../core/components/header/header.component";
import { FooterComponent } from "../../core/components/footer/footer.component";

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [HeroComponent, HeaderComponent, FooterComponent],
   templateUrl: './home.component.html',
   styleUrl: './home.component.scss',
})
export class HomeComponent {
   features = HERO_FEATURES;
}
