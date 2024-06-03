import { Component, OnInit, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/characters-response';

@Component({
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  private _charactersService = inject(CharactersService);
  public charactersList?: Character[];
  public isLoading = true;
  public mensaje = 'Cargando el listado de personajes';
  public totalPages = 0;
  private _nextPage = 0;
  private _prevPage = 0;

  ngOnInit(): void {
    this.obtenerTodos();
  }
  private obtenerTodos() {
    this._charactersService.getCharacters().subscribe((x) => {
      setTimeout(() => {
        this.charactersList = x.results;
        this.totalPages = x.info.pages;
        this._nextPage = Number.parseInt(x.info.next.slice(-1));
        if (x.info.prev) {
          this._prevPage = Number.parseInt(x.info.prev.slice(-1));
        }
        this.isLoading = false;
      }, 2500);
    });
  }
  public changePage(direction: 'previous' | 'next'): void {
    this.isLoading = true;
    const pageToFetch =
      direction === 'previous' ? this._prevPage : this._nextPage;

    this._charactersService
      .getCharactersPaginated(pageToFetch)
      .subscribe((paginated) => {
        setTimeout(() => {
          this.charactersList = paginated.results;
          this.totalPages = paginated.info.pages;
          if (paginated.info.next) {
            this._nextPage = Number.parseInt(paginated.info.next.slice(-1));
          }
          if (paginated.info.prev) {
            this._prevPage = Number.parseInt(paginated.info.prev.slice(-1));
          }
          this.isLoading = false;
        }, 1800);
      });
  }
}
