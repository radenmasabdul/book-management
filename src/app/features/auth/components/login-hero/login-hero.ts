import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login-hero',
  standalone: true,
  imports: [],
  templateUrl: './login-hero.html',
  styleUrl: './login-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginHero {}
