import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebBackendService {
  constructor(private http: HttpClient) {
  }
  async getData() {
    return await this.http.get("http://10.0.0.43:7096/");
  }
  async searchName(name: string) {
    return await this.http.post("http://10.0.0.43:7096/api/nameSearch", { name: name},);
  }
  async searchGenre(genreId: number) {
    return await this.http.post("http://10.0.0.43:7096/api/genre", { genreId: genreId });
  }
  async getGameCover(coverID: number) {
    return await this.http.post("http://10.0.0.43:7096/api/gameCovers", { coverid: coverID });
  }
  async getGenreNames(genreIDs: number[]){
    return await this.http.post("http://10.0.0.43:7096/api/genreNames", { genreids: genreIDs });
  }
  async getPlatformNames(platformIDs: number[]) {
    return await this.http.post("http://10.0.0.43:7096/api/platformNames", {platformids: platformIDs});
  }
}
