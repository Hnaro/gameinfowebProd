import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
  //genreSearchResults: any[];
  // list of genreIDs for searching
  genreSelectedIDs: any[] = [];
  constructor(private clientAPI: WebBackendService, 
    private route: ActivatedRoute, private searchService: SearchService) {
    this.gamesSearchResults = [];
    //searchService.setSearchedGenres = [{id: 1, name:"test1"},{id: 2, name:"test2"}]
  }
  ngOnInit(): void {
    this.setUpData();
  }
  async setUpData() {
    setTimeout(async () => {
      let gameresults: any;
      this.nameSearched = "Martian";
      await this.clientAPI.getData().then(value => {
        let subscribedData = value.subscribe(value => {
          this.gamesSearchResults = value;
          // unsubscribed to data when collected
          if (this.gamesSearchResults) {
            subscribedData.unsubscribe();
          }
        })
      })
    }, 500);
  }
  async handleSearchByGenre(e: any) {
    await this.clientAPI.searchByGenres(e)
    .then(data => {
      let subs = data.subscribe(value => {
        this.gamesSearchResults = value;
        if (this.gamesSearchResults) {
          subs.unsubscribe();
        }
      })
    })
  }
  async handleGameSearch(e: any) {
    await this.clientAPI.searchByName(e)
    .then(data => {
      let subs = data.subscribe(value => {
        this.gamesSearchResults = value;
        if(this.gamesSearchResults) {
          subs.unsubscribe();
        }
      })
    })
  }
}
