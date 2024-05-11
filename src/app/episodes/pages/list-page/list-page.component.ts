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

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this._episodesService.getEpisodes().subscribe((data) => {
      if (data.results.length > 0) {
        setTimeout(() => {
          this.episodesList = data.results;
          this.totalPages = data.info.count;
          this.isLoading = false;
          this._nextPage = Number.parseInt(data.info.next.slice(-1));
        }, 1800);
      }
    });
  }

  changePage(pagina: 'previous' | 'next') {}
}
