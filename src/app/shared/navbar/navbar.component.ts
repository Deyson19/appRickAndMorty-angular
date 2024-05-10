import { Component } from '@angular/core';

interface MenuItems {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public menuItems: MenuItems[] = [
    { name: 'Characters', path: '/' },
    { name: 'Episodes', path: '/episodes' },
    { name: 'Locations', path: '/locations' },
  ];
}
