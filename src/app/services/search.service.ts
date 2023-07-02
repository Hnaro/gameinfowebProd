import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  #searchedGenres: any;
  constructor() {
  }
  set setSearchedGenres(searchedgenres: any) {
    this.#searchedGenres = searchedgenres;
  }
  get getSearchedGenres(): any {
    return this.#searchedGenres;
  }
}
