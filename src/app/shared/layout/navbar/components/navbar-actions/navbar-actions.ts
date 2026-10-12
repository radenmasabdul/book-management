import { Component } from '@angular/core';
import { ThemeComponent } from '../../../../components/theme/theme';
import { Notification } from './components/notification/notification';
import { AccountMenu } from './components/account-menu/account-menu';

@Component({
  selector: 'app-navbar-actions',
  imports: [ThemeComponent, Notification, AccountMenu],
  templateUrl: './navbar-actions.html',
  styleUrl: './navbar-actions.css',
})
export class NavbarActions {}
