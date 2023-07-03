import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../.environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WebBackendService {
  constructor(private http: HttpClient) {
  }
  // change this for new url if deployed
  defaultURL = "http://10.0.0.145:7096/api";
  defaultGetDataUrl = "http://10.0.0.145:7096/"

  deployedDefaultURL = env.deployedBackendURL+"api";
  deployedGetDataUrl = env.deployedBackendURL;
  async getData() {
    return await this.http.get(this.deployedGetDataUrl);
  }
  async getAllGenreNames() {
    return await this.http.get(this.deployedDefaultURL+"/allGenres");
  }
  async searchByName(name: string) {
    return await this.http.post(this.deployedDefaultURL+"/nameSearch", { name: name},);
  }
  async searchByGenre(genreId: number) {
    return await this.http.post(this.deployedDefaultURL+"/genre", { genreId: genreId });
  }
  async searchByGenres(genreIds: number) {
    return await this.http.post(this.deployedDefaultURL+"/genresSearch", { genreids: genreIds });
  }
  async getGameCover(gameID: number) {
    return await this.http.post(this.deployedDefaultURL+"/gameCovers", { gameid: gameID });
  }
  async getGenreNames(genreIDs: number[]){
    return await this.http.post(this.deployedDefaultURL+"/genreNames", { genreids: genreIDs });
  }
  async getPlatformNames(platformIDs: number[]) {
    return await this.http.post(this.deployedDefaultURL+"/platformNames", {platformids: platformIDs});
  }
  // get single game info
  async getsingleGameInfo(gameID: number) {
    return await this.http.post(this.deployedDefaultURL+"/gameSearch", {gameid: gameID})
  }
  //get single game website
  async getsingleGameWebsites(gameID: number) {
    return await this.http.post(this.deployedDefaultURL+"/gamesitesSearch", {gameid:gameID})
  }
}
