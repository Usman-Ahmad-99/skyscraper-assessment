import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent, HeroSectionComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
