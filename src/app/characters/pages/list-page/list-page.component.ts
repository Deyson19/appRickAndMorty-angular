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
  public mensaje = 'Cargando lista de personajes';
  public totalPages = 0;

  ngOnInit(): void {
    this._charactersService.getCharacters().subscribe((x) => {
      setTimeout(() => {
        this.charactersList = x.results;
        this.totalPages = x.info.pages;
        this.isLoading = false;
      }, 1500);
    });
  }
}
