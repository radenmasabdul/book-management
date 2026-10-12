import { Injectable, signal } from '@angular/core';

export type AlertVariant = 'success' | 'error' | 'info' | 'warning';

export interface AlertData {
  variant: AlertVariant;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  readonly alert = signal<AlertData | null>(null);

  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  private readonly duration = 5000;

  success(description: string, title = 'Success') {
    this.show('success', description, title);
  }

  error(description: string, title = 'Error') {
    this.show('error', description, title);
  }

  info(description: string, title = 'Info') {
    this.show('info', description, title);
  }

  warning(description: string, title = 'Warning') {
    this.show('warning', description, title);
  }

  clear() {
    this.cancelTimeout();
    this.alert.set(null);
  }

  private show(
    variant: AlertVariant,
    description: string,
    title: string,
  ) {
    this.cancelTimeout();

    this.alert.set({
      variant,
      title,
      description,
    });

    this.timeoutId = setTimeout(() => {
      this.alert.set(null);
      this.timeoutId = null;
    }, this.duration);
  }

  private cancelTimeout() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}