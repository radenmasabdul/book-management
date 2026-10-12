import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../../../core/services/alert.service';
import { Header } from '../components/header/header';
import { LoginForm } from '../components/login-form/login-form';
import { LoginHero } from '../components/login-hero/login-hero';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [Header, LoginForm, LoginHero],
  templateUrl: './pages.html',
  styleUrl: './pages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly alertService = inject(AlertService);
  private readonly router = inject(Router);

  readonly showPassword = signal(false);
  readonly isLoading = signal(false);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  togglePassword(): void {
    this.showPassword.update((value) => !value);
  }

  onSubmit(): void {
    if (this.form.invalid || this.isLoading()) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);

    this.authService
      .login(this.form.getRawValue())
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (response) => {
          this.alertService.success(response.message ?? 'Login successful.');
          console.log('Login response:', response);
          void this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.alertService.error(error?.error?.message ?? 'Login failed.');
          console.error('Login error:', error);
        },
      });
  }
}
