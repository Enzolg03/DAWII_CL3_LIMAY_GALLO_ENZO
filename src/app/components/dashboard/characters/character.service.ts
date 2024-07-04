import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.httpClient.get<{ results: Character[] }>('https://rickandmortyapi.com/api/character').pipe(
      map(response => response.results)
    );
  }
}
