import { Component, Input, OnInit } from '@angular/core';
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

  genreIDs: number[] = [];
  coverUrl: any = "";
  constructor(private clientAPI: WebBackendService) {}

  async setupData() {
    let results: any;
     await this.clientAPI.getGameCover(this.gameID).then(data => {
      data.subscribe(value => {
        this.coverUrl = Object.values(value)[0].url;
      })
    })
  }

  ngOnInit(): void {
    this.setupData();
  }

}
