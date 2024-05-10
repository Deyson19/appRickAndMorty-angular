import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <p>locations-layout works!</p>
    <router-outlet></router-outlet>
  `,
})
export class LocationsLayoutComponent {}
