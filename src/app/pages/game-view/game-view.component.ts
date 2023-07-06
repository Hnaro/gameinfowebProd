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

  defaultImage: string = "../../../assets/nodataImage.png";

  genreNames: any[] = [];
  constructor(private route: ActivatedRoute,private clientAPI: WebBackendService){}
  checkCoverUrl(url: string) {
    if (url) {
      return url;
    } else {
      return this.defaultImage;
    }
  }
  async setUpGameViewData() {
    let querySubs = await this.route.queryParamMap.subscribe(value => {
      this.id = value.get("id");
    });
    querySubs.unsubscribe();
        // request more info here
    // get gameinfo
    await this.clientAPI.getsingleGameInfo(this.id)
    .then(async (body) => {
      let bodysubs = await body.subscribe( async (body) => {
        let results = Object.values(body);
        //console.log(results[0]);
        this.genreIDs = results[0].genres;
        this.name = results[0].name;
        this.description = results[0].summary;
        // get genre names
        await this.clientAPI.getGenreNames(this.genreIDs)
        .then( async (data) => {
          let subs = data.subscribe(async (value) => {
            this.genreNames = Object.values(value);
            //console.log(this.genreNames.length);
            if (this.genreNames) {
              subs.unsubscribe();
            }
          })
        })
        //get cover
        await this.clientAPI.getGameCover(this.id)
        .then( async (data) => {
          let subs = await data.subscribe((value) => {
            let cover: any;
            cover = Object.values(value)![0];
            this.coverUrl = cover.url;
            if (cover) {
              subs.unsubscribe();
            }
          })
        })
        // get platforms name
        await this.clientAPI.getPlatformNames(results[0].platforms)
        .then(async (data) => {
          let subs = await data.subscribe( async (value) => {
            this.platformNames = await Object.values(value);
            if(this.platformNames) {
              subs.unsubscribe();
            }
          })
        })
        // get website names
        await this.clientAPI.getsingleGameWebsites(this.id)
        .then(async (data) => {
          let subs = await data.subscribe( async (value) => {
            this.websites = await Object.values(value);
            if (this.websites) {
              subs.unsubscribe();
            }
          })
        })

        if(results) {
          bodysubs.unsubscribe();
        }
      })
    })
  }

  ngOnInit(): void {
    setTimeout( async () => {
      await this.setUpGameViewData();
    },500);
  }
}
