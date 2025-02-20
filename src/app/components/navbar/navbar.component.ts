import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen: boolean = false; // 👈 Define la propiedad para controlar el estado del menú

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // 👈 Cambia el estado al hacer clic en el botón
  }
}