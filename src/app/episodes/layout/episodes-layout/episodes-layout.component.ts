import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <p>
      episodes-layout works! De aquí a la cola del INEM, Con suerte una empresa
      en Bangladesh nos hace un outsourcing bien rico. Aporreo el teclado como
      un mono con toda la zorra que tengo. Eternal becario, suicídenme. Vamos
      directos al paro, a programar debajo de un puente robando la luz de las
      farolas. Primo, dame algo suelto que este servidor no se paga solo.
    </p>
    <router-outlet></router-outlet>
  `,
})
export class EpisodesLayoutComponent {}
