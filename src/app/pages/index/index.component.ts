import { Component, Input, OnInit } from '@angular/core';
import { WebBackendService } from '../../services/web-backend.service';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  gamesSearchResults: any;
  nameSearched: any;
  constructor(private clientAPI: WebBackendService, 
    private route: ActivatedRoute) {
    this.gamesSearchResults = [];
  }
  ngOnInit(): void {
    let gameresults: any;
    this.nameSearched = "Martian";
    this.clientAPI.getData().then(value => {
      value.subscribe(value => {
        this.gamesSearchResults = Object.values(value);
        console.log(this.gamesSearchResults)
      })
    })
    setTimeout(() => {

    }, 500);
  }

  async handleGameSearch(e: any) {
    await this.clientAPI.searchByName(e)
    .then(data => {
      data.subscribe(value => {
        this.gamesSearchResults = Object.values(value);
      })
    })
  }
}
