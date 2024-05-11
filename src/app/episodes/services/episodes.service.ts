import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Episode, EpisodesResponse } from '../interfaces/episodes-response';

@Injectable({ providedIn: 'root' })
export class EpisodesService {
  private _baseUrl = environment.apiUrl;
  private _http = inject(HttpClient);
  constructor() {}

  getEpisodes(): Observable<EpisodesResponse> {
    return this._http.get<EpisodesResponse>(`${this._baseUrl}episode`);
  }

  getEpisode(id: number): Observable<Episode> {
    return this._http.get<Episode>(`${this._baseUrl}episode/${id}`);
  }

  getEpisodesPaginated(page: number): Observable<EpisodesResponse> {
    const url = `${this._baseUrl}episode?page=${page}`;
    return this._http.get<EpisodesResponse>(url);
  }
}
