import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideBookOpen, lucideMenu, lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      lucideMenu,
      lucideX,
      lucideBookOpen,
    }),
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  @Input() isMobileMenuOpen = false;

  @Output() menuClick = new EventEmitter<void>();
  @Output() brandClick = new EventEmitter<void>();

  onMenuClick(): void {
    this.menuClick.emit();
  }

  closeMobileMenu(): void {
    this.brandClick.emit();
  }
}
