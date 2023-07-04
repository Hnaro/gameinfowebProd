import { Component } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private searchService: SearchService) {
  }
  openSlideBar() {
    // use boolean for opening and closing the slide bar
    // create another component for slide bar make it fixed or sticky position and absolute
  }
}
