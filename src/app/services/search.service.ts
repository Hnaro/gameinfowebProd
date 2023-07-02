import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchedName: string = "";
  constructor() {}
  set setName(name: string) {
    this.searchedName = name;
  }
  get getName(): string {
    return this.searchedName;
  }
}
