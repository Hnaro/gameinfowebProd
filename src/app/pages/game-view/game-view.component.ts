import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebBackendService } from 'src/app/services/web-backend.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  id: any;
  genreIDs: number[] = [];
  name: any;
  coverUrl: string = "";
  platformNames: any[] = [];
  description: any;
  websites: any[] = [];

  genreNames: any[] = [];
  constructor(private route: ActivatedRoute,private clientAPI: WebBackendService){}
  
  async setUpGameViewData() {
        // request more info here
    // get gameinfo
    await this.clientAPI.getsingleGameInfo(this.id)
    .then(async (body) => {
      await body.subscribe( async (body) => {
        let results = await Object.values(body);
        console.log(results[0]);
        this.genreIDs = results[0].genres;
        this.name = results[0].name;
        this.description = results[0].summary;
        // get genre names
        await this.clientAPI.getGenreNames(this.genreIDs)
        .then( async (data) => {
          await data.subscribe(async (value) => {
            this.genreNames = await Object.values(value);
            //console.log(this.genreNames.length);
          })
        })
        //get cover 
        await this.clientAPI.getGameCover(this.id)
        .then( async (data) => {
          await data.subscribe(async (value) => {
            this.coverUrl = await Object.values(value)[0].url;
          })
        })
        // get platforms name
        await this.clientAPI.getPlatformNames(results[0].platforms)
        .then(async (data) => {
          await data.subscribe( async (value) => {
            this.platformNames = await Object.values(value);
          })
        })
        // get website names
        await this.clientAPI.getsingleGameWebsites(this.id)
        .then(async (data) => {
          await data.subscribe( async (value) => {
            this.websites = await Object.values(value);
            console.log(this.websites);
          })
        })
      })
    })
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {
      this.id = value.get("id");
    });
    this.setUpGameViewData();
  }
}
