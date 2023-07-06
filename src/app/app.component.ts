import { Component } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSlideBarNotActive: boolean = false;
  constructor(private searchService: SearchService) { }

  handleSlidebarStatus(e: any) {
    this.isSlideBarNotActive = e;
  }
  openSlideBar() {
    if (this.isSlideBarNotActive) {
      this.isSlideBarNotActive = false;
      return;
    }
    this.isSlideBarNotActive = true;
    // use boolean for opening and closing the slide bar
    // create another component for slide bar make it fixed or sticky position and absolute
  }
}
