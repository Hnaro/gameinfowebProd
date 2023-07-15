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

  selectedids: number[] = [];
  genres: any[];
  firstClicked: boolean = true;
  constructor(private clientAPI: WebBackendService, private searchService: SearchService) {
    this.genres = [];
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
    if (this.firstClicked) {
      this.firstClicked = false;
      this.selectedids.push(ids);
      return
    }
    this.firstClicked = true;
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
}
