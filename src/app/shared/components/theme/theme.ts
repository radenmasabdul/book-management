import { afterNextRender, ChangeDetectionStrategy, Component, DOCUMENT, EventEmitter, inject, Output, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      lucideSun,
      lucideMoon,
    }),
  ],
  templateUrl: './theme.html',
  styleUrl: './theme.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeComponent {
  private readonly document = inject(DOCUMENT);
  readonly theme = signal<Theme>('light');

  @Output() themeToggle = new EventEmitter<void>();

  constructor() {
    afterNextRender(() => {
      const savedTheme = localStorage.getItem('theme');

      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      const initialTheme: Theme =
        savedTheme === 'light' || savedTheme === 'dark'
          ? savedTheme
          : systemPrefersDark
            ? 'dark'
            : 'light';

      this.applyTheme(initialTheme);
    });
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.theme() === 'light' ? 'dark' : 'light';

    this.applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  }

  private applyTheme(theme: Theme): void {
    this.theme.set(theme);

    this.document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}
