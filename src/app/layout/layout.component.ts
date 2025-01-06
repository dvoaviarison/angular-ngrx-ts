import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-layout',
  imports: [
    FooterComponent, 
    HeaderComponent, 
    MenuComponent, 
    MatGridListModule,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
}
