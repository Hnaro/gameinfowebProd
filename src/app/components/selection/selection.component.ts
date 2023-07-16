import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { WebBackendService } from 'src/app/services/web-backend.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @Output() selectedIDS = new EventEmitter;

  isSelectionActive: boolean = false;
  clickedTimes: any[];
  selectedids: number[] = [];
  genres: any[];
  constructor(private clientAPI: WebBackendService, private searchService: SearchService) {
    this.genres = [];
    this.clickedTimes = [];
    //searchService.setSearchedGenres = [{id: 1, name:"test1"},{id: 2, name:"test2"}]
  }
  ngOnInit(): void {
    this.setUpGenreIDs();
  }
  async setUpGenreIDs() {
    // client
    this.clientAPI.getAllGenreNames().then(data => {
      let subs = data.subscribe(value => {
        this.genres = Object.values(value);
        if (this.genres) {
          subs.unsubscribe();
        }
      })
    })
    //console.log(this.searchService.getSearchedGenres);
  }
  // gets the selected ids and throw it back to search bar
  // each button for selecting ids will have this
  selectID(ids: number){
    //  store selectedIds
    // check if five is already in the clicked times then go on with remove clicked times
    let index = this.clickedTimes.findIndex(value => {
     return value.id === ids;
    })
    let idIndex = this.selectedids.findIndex(value => {
      return ids === value;
    })
    if (idIndex === -1) {
      this.selectedids.push(ids);
    }
    console.log(this.selectedids);
    // first checked if clicked times is empty if empty push if not check if id is already inside clicked times
    if (index === -1 ) {
      let clicked = {
        id: ids,
        clickedcount: 1
      }
        this.clickedTimes.push(clicked);
    }else {
      if (this.clickedTimes[index].clickedcount == 1) {
        this.selectedids.splice(idIndex);
        this.clickedTimes[index].clickedcount = 0;
      } else {
        this.clickedTimes[index].clickedcount = 1;
      }
    }
  }
  filterSearch() {
    //console.log(this.selectedids)
    this.selectedIDS.emit(this.selectedids);
    this.selectedids = [];
    this.isSelectionActive = false;
  }
  isChecked(id: number) {
    return this.selectedids.filter(value => {
      return  value === id;
    })
  }
  showSelections() {
    if (this.isSelectionActive) {
      // emit data here
      // get selected ids
      // if id is selected
      this.isSelectionActive = false;
      return;
    }
    this.isSelectionActive = true;
  }
  showSelectionsMouseOver() {
    this.isSelectionActive = true;
  }
  hideSelectionsMouseOut() {
    this.isSelectionActive = false;
  }
}
