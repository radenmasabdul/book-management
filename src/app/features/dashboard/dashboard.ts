import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly authService = inject(AuthService);

  private readonly router = inject(Router);

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Logout failed:', error);
      },
    });
  }
}
