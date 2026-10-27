import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideAtSign,
  lucideLock,
  lucideEye,
  lucideEyeOff,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIconComponent],
  providers: [
    provideIcons({
      lucideAtSign,
      lucideLock,
      lucideEye,
      lucideEyeOff,
    }),
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  readonly form = input.required<FormGroup>();
  readonly isLoading = input(false);
  readonly showPassword = input(false);

  readonly submitted = output<void>();
  readonly passwordVisibilityToggled = output<void>();

  onFormSubmit(): void {
    this.submitted.emit();
  }

  togglePasswordVisibility(): void {
    this.passwordVisibilityToggled.emit();
  }
}