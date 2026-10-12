import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideLogOut, lucideSettings, lucideUserRound } from '@ng-icons/lucide';
import { AuthService } from '../../../../../../../features/auth/services/auth.service';

@Component({
  selector: 'app-account-menu',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      lucideChevronDown,
      lucideUserRound,
      lucideSettings,
      lucideLogOut,
    }),
  ],
  templateUrl: './account-menu.html',
  styleUrl: './account-menu.css',
})
export class AccountMenu {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly currentUser = this.authService.currentUser;

  readonly isDropdownOpen = signal(false);
  readonly isLoggingOut = signal(false);
  readonly logoutError = signal<string | null>(null);

  toggleDropdown(): void {
    this.isDropdownOpen.update((open) => !open);
    this.logoutError.set(null);
  }

  closeDropdown(): void {
    this.isDropdownOpen.set(false);
  }

  logout(): void {
    if (this.isLoggingOut()) {
      return;
    }

    this.isLoggingOut.set(true);
    this.logoutError.set(null);
    this.closeDropdown();

    this.authService.logout().subscribe({
      next: () => {
        this.isLoggingOut.set(false);
        void this.router.navigate(['/']);
      },
      error: () => {
        this.isLoggingOut.set(false);
        this.logoutError.set('Logout gagal. Silakan coba lagi.');
      },
    });
  }
}
