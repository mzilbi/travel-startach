import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '@app/core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) { }

  getStatesList(): Observable<State[]> {
    return this.http.get<State[]>(`https://restcountries.eu/rest/v2/all`);
  }
}
