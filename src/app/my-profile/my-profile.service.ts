import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pluck, tap } from 'rxjs';
import { Character } from '../my-profile/model';

@Injectable({
  providedIn: 'root'
})

export class MyProfileService {
  constructor(
    private httpClient: HttpClient
  ) { }
  getRandomImage(): Observable<Character> {
    return this.httpClient.get<Character>('https://rickandmortyapi.com/api/character').pipe(pluck('results'),map((data) => data[0]?.image));
    // tap(e => console.log(e)));
    }
}

