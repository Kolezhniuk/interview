import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataMuseResponse } from '../models/DataMuseResponse';
import { Observable } from 'rxjs';

@Injectable()
export class DataMuseAPIService {

  apiURL: string = '/api/words';
  maxSuggestions = 5;

  constructor(private httpClient: HttpClient) { }

  getSynonyms(word: string): Observable<DataMuseResponse[]> {
    return this.httpClient.get<DataMuseResponse[]>(`${this.apiURL}`, {
      params: {
        ml: word,
        max: '5'
      }
    });
  }
}
