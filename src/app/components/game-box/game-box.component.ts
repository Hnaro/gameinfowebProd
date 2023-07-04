import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { WebBackendService } from 'src/app/services/web-backend.service';

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.css']
})
export class GameBoxComponent implements OnInit {
  coverIDResult: any;
  @Input() gameID: any;
  @Input() name: string = "";
  @Input() coverID: number = 0;
  // if no cover use this instead
  defaultImage: string = "../../../assets/nodataImage.png";

  genreIDs: number[] = [];
  coverUrl: any;
  cover: any;
  constructor(private clientAPI: WebBackendService) {}
  testImage: string = "";
  checkCoverUrl(url: string) {
    if (url) {
      return url;
    } else {
      return this.defaultImage;
    }
  }
  async setupData() {
    let results: any;
     await this.clientAPI.getGameCover(this.gameID).then(data => {
      let subs = data.subscribe(value => {
        this.cover = Object.values(value)[0];
        this.coverUrl = this.cover?.url;
        if (this.cover) {
          subs.unsubscribe();
        }
      })
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.setupData();
    }, 1000)
  }

}
