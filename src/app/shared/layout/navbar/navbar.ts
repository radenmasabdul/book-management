import { Component } from '@angular/core';
import { NavbarActions } from './components/navbar-actions/navbar-actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarActions],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
