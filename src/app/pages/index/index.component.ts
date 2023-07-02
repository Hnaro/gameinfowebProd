import { Component, OnInit } from '@angular/core';
import { WebBackendService } from '../../services/web-backend.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  gamesSearchResults: any;
  searchedResults: boolean = false;
  constructor(private clientAPI: WebBackendService) {
    this.gamesSearchResults = [];
  }
  ngOnInit(): void {
    let gameresults: any;
    let results = this.clientAPI.getData().then(value => {
      value.subscribe(value => {
        this.gamesSearchResults = Object.values(value);
        console.log(this.gamesSearchResults)
      })
    })
  }
}
