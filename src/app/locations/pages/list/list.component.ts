import { Component, OnInit, inject } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { Location } from '../../interfaces/locations-response';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  private _locationService = inject(LocationsService);
  public locations: Location[] = [];
  public isLoading = true;
  public mensaje = 'Cargando Listado de Lugares';
  public currentPage = 1;
  private _nextPage = 0;
  private _prevPage = 0;
  public totalPages = 0;
  ngOnInit(): void {
    this.obtenerTodos();
  }
  obtenerTodos() {
    this._locationService.obtenerTodos().subscribe((resp) => {
      if (resp.results.length > 0) {
        setTimeout(() => {
          this.locations = resp.results;
          this.totalPages = resp.info.pages;
          this.isLoading = false;
          this._nextPage = Number.parseInt(resp.info.next.slice(-1));
        }, 1700);
      }
    });
  }
  get nextPage() {
    return this._nextPage;
  }

  changePage(pagina: 'previous' | 'next') {
    this.isLoading = true;
    const pageToFind = pagina === 'previous' ? this._prevPage : this._nextPage;
    if (pageToFind > this.totalPages) {
      this.isLoading = false;
      this.mensaje = 'No hay más registros';
      window.location.reload;
      return;
    }
    console.log(pageToFind);

    this.obtenerPagina(pageToFind);
  }

  private obtenerPagina(page: number) {
    this._locationService.obtenerPaginado(page).subscribe((byPage) => {
      console.log(byPage);

      setTimeout(() => {
        if (byPage.results.length > 1) {
          this.locations = byPage.results;
          this.isLoading = false;
          if (byPage.info.next) {
            this._nextPage = Number.parseInt(byPage.info.next.slice(-1));
            this.currentPage = this._nextPage - 1;
            return;
          }
          this._nextPage = this.currentPage + 1;
          if (byPage.info.prev) {
            this._prevPage = Number.parseInt(byPage.info.prev);
          }
          this.isLoading = false;
        }
      }, 1800);
    });
  }
}
