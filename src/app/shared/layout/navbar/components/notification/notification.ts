import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      lucideBell,
    }),
  ],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Notification {}
