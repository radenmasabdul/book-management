import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  signal,
} from '@angular/core';
import { Header } from './components/header/header';
import { MobileNav } from './components/mobile-nav/mobile-nav';
import { NavbarActions } from './components/navbar-actions/navbar-actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Header, MobileNav, NavbarActions],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  @Output() menuClick = new EventEmitter<void>();

  readonly isMobileMenuOpen = signal(false);

  onMenuClick(): void {
    this.isMobileMenuOpen.update((open) => !open);
    this.menuClick.emit();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
