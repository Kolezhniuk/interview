import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataMuseState } from '../models/IDataMuseState';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class DataMuseAPIService {

  apiURL = '/api/words';
  MAX_SUGGESTIONS = '5';

  constructor(private httpClient: HttpClient) { }

  getSynonymus(word: string): Observable<IDataMuseState> {
    return this.httpClient.get<any>(`${this.apiURL}`, {
      params: {
        ml: word,
        max: this.MAX_SUGGESTIONS
      }
    }).pipe(
        map((items) => ({ word: word, tags: items.map(i => i.word), isLoading: false})),
    );
  }
}
