import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { WebBackendService } from 'src/app/services/web-backend.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() sendsearchName = new EventEmitter();
  noInput: boolean = false;

  name: string = "";
  errMsg: string = "Please enter a name...";
  constructor(private clientAPI: WebBackendService, private searchService:SearchService) {
    //searchService.setName = [1,4,8,16];
  }
  ngOnInit(): void {}
  onClick() {
    if (this.name) {
      this.sendsearchName.emit(this.name);
      this.noInput = false;
    }else { 
      this.noInput = true;
    }
    // click send data that should trigger the search game
  }
}
