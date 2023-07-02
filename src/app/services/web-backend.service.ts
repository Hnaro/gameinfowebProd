import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebBackendService {
  constructor(private http: HttpClient) {
  }
  async getData() {
    return await this.http.get("http://localhost:7096/");
  }
  async searchName(name: string) {
    return await this.http.post("http://10.0.0.145:7096/api/nameSearch", { name: name},);
  }
  async searchGenre(genreId: number) {
    return await this.http.post("http://10.0.0.145:7096/api/genre", { genreId: genreId });
  }
  async getGameCover(gameID: number) {
    return await this.http.post("http://10.0.0.145:7096/api/gameCovers", { gameid: gameID });
  }
  async getGenreNames(genreIDs: number[]){
    return await this.http.post("http://10.0.0.145:7096/api/genreNames", { genreids: genreIDs });
  }
  async getPlatformNames(platformIDs: number[]) {
    return await this.http.post("http://10.0.0.145:7096/api/platformNames", {platformids: platformIDs});
  }
  // get single game info
  async getsingleGameInfo(gameID: number) {
    return await this.http.post("http://10.0.0.145:7096/api/gameSearch", {gameid: gameID})
  }
  //get single game website
  async getsingleGameWebsites(gameID: number) {
    return await this.http.post("http://10.0.0.145:7096/api/gamesitesSearch", {gameid:gameID})
  }
}
