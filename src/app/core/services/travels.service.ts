import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Travel } from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  private travlesSubject$: BehaviorSubject<Travel[]>;
  public travels$: Observable<Travel[]>;

  constructor() {
    this.travlesSubject$ = new BehaviorSubject<Travel[]>([]);
    this.travels$ = this.travlesSubject$.asObservable();
  }

  addTravel(travel: Travel): void {
    const list = this.travlesSubject$.value;
    list.push(travel);
    this.travlesSubject$.next(list);
  }
}
