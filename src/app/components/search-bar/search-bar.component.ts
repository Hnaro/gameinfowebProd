import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebBackendService } from 'src/app/services/web-backend.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() sendsearchName = new EventEmitter();
  @Output() sendSearchGenre = new EventEmitter();
  name: string = "";
  genreSearch: number[] = [];
  constructor(private clientAPI: WebBackendService) {}
  ngOnInit(): void {}

  onClick() {
    this.sendsearchName.emit(this.name);
    // click send data that should trigger the search game
    console.log("test");
  }
}
