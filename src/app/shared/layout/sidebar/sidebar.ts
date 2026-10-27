import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideLayoutDashboard,
  lucideBookOpen,
  lucideUsers,
  lucideX,
} from '@ng-icons/lucide';
import { Header } from './components/header/header';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'lucideLayoutDashboard',
  },
  {
    label: 'Books',
    path: '/books',
    icon: 'lucideBookOpen',
  },
  {
    label: 'Users',
    path: '/users',
    icon: 'lucideUsers',
  },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIcon, Header],
  providers: [
    provideIcons({
      lucideLayoutDashboard,
      lucideBookOpen,
      lucideUsers,
      lucideX,
    }),
  ],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  readonly open = input(false);
  readonly toggle = output<void>();
  readonly close = output<void>();

  readonly navItems = NAV_ITEMS;

  onToggle(): void {
    this.toggle.emit();
  }

  onClose(): void {
    this.close.emit();
  }
}
