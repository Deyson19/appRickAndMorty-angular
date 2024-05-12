import { Component, OnInit, inject } from '@angular/core';
import { Episode } from '../../interfaces/episodes-response';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  private _episodesService = inject(EpisodesService);
  mensaje = 'Cargando la lista de episodios'.toUpperCase();
  episodesList: Episode[] = [];
  isLoading = true;
  totalPages = 0;
  private _nextPage = 0;
  private _prevPage = 0;
  public currentPage = 1;

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this._episodesService.getEpisodes().subscribe((data) => {
      if (data.results.length > 0) {
        setTimeout(() => {
          this.episodesList = data.results;
          this.totalPages = data.info.pages;
          this.isLoading = false;
          this._nextPage = Number.parseInt(data.info.next.slice(-1));
        }, 1800);
      }
    });
  }
  get nextPage() {
    return this._nextPage;
  }

  changePage(pagina: 'previous' | 'next') {
    this.isLoading = true;
    const pageToFetch = pagina === 'previous' ? this._prevPage : this._nextPage;
    if (pageToFetch > this.totalPages) {
      this.isLoading = false;
      this.mensaje = 'No hay más episodios';
      window.location.reload;
      return;
    }

    this._episodesService
      .getEpisodesPaginated(pageToFetch)
      .subscribe((paginated) => {
        setTimeout(() => {
          if (paginated.results.length > 1) {
            this.episodesList = paginated.results;
            if (paginated.info.next) {
              this._nextPage = Number.parseInt(paginated.info.next.slice(-1));
              this.currentPage = this._nextPage - 1;
            }
            this._nextPage = this.currentPage + 1;
            if (paginated.info.prev) {
              this._prevPage = Number.parseInt(paginated.info.prev.slice(-1));
            }
            this.isLoading = false;
          }
        }, 1800);
      });
  }
}
