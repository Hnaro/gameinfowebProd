import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebBackendService {
  constructor(private http: HttpClient) {
  }
  // change this for new url if deployed
  defaultURL = "http://10.0.0.145:7096/api";
  defaultGetDataUrl = "http://10.0.0.145:7096/"
  async getData() {
    return await this.http.get(this.defaultGetDataUrl);
  }
  async searchByName(name: string) {
    return await this.http.post(this.defaultURL+"/nameSearch", { name: name},);
  }
  async searchByGenre(genreId: number) {
    return await this.http.post(this.defaultURL+"/genre", { genreId: genreId });
  }
  async getGameCover(gameID: number) {
    return await this.http.post(this.defaultURL+"/gameCovers", { gameid: gameID });
  }
  async getGenreNames(genreIDs: number[]){
    return await this.http.post(this.defaultURL+"/genreNames", { genreids: genreIDs });
  }
  async getPlatformNames(platformIDs: number[]) {
    return await this.http.post(this.defaultURL+"/platformNames", {platformids: platformIDs});
  }
  // get single game info
  async getsingleGameInfo(gameID: number) {
    return await this.http.post(this.defaultURL+"/gameSearch", {gameid: gameID})
  }
  //get single game website
  async getsingleGameWebsites(gameID: number) {
    return await this.http.post(this.defaultURL+"/gamesitesSearch", {gameid:gameID})
  }
}
