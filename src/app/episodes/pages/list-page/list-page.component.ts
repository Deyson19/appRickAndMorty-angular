import { Component } from '@angular/core';

@Component({
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent {
  mensaje = 'Cargando la lista de episodios'.toUpperCase();
  isLoading = true;
  totalPages = 0;
  private _nextPage = 0;
  private _prevPage = 0;

  changePage(pagina: 'previous' | 'next') {}
}
