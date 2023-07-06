import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {
  @Output() updateSlidebarStatus = new EventEmitter();
  isActive: boolean = false;
  closeSlidebar() {
    this.updateSlidebarStatus.emit(false);
  }
}
