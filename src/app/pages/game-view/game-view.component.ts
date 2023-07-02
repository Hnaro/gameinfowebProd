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
  websites: any[] = [];

  genreNames: any[] = [];
  constructor(private route: ActivatedRoute,private clientAPI: WebBackendService){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {
      this.id = value.get("id");
    });
    // request more info here
    // get gameinfo
    this.clientAPI.getsingleGameInfo(this.id)
    .then(body => {
      body.subscribe(body => {
        let results = Object.values(body);
        console.log(results[0]);
        this.genreIDs = results[0].genres;
        this.name = results[0].name;
        // get genre names
        this.clientAPI.getGenreNames(this.genreIDs)
        .then(data => {
          data.subscribe(value => {
            this.genreNames = Object.values(value);
            //console.log(this.genreNames.length);
          })
        })
        //get cover 
        this.clientAPI.getGameCover(this.id)
        .then(data => {
          data.subscribe(value => {
            this.coverUrl = Object.values(value)[0].url;
          })
        })
        // get platforms name
        this.clientAPI.getPlatformNames(results[0].platforms)
        .then(data => {
          data.subscribe(value => {
            this.platformNames = Object.values(value);
          })
        })
        // get website names
        this.clientAPI.getsingleGameWebsites(this.id)
        .then(data => {
          data.subscribe(value => {
            this.websites = Object.values(value);
            console.log(this.websites);
          })
        })
      })
    })
  }
}
