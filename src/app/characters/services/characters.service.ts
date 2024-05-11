import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Character,
  CharactersResponse,
} from '../interfaces/characters-response';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private _http = inject(HttpClient);
  private _baseUrl = environment.apiUrl;
  constructor() {}

  getCharacters(): Observable<CharactersResponse> {
    return this._http.get<CharactersResponse>(`${this._baseUrl}/character`);
  }
  getCharacterById(id: number): Observable<Character> {
    return this._http.get<Character>(`${this._baseUrl}/${id}`);
  }

  getCharactersPaginated(page: number): Observable<CharactersResponse> {
    return this._http.get<CharactersResponse>(
      `${this._baseUrl}/character?page=${page}`
    );
  }
}
