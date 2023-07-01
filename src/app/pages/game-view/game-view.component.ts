import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebBackendService } from 'src/app/services/web-backend.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  id: any;
  genreIDs: any;
  constructor(private route: ActivatedRoute,private clientAPI: WebBackendService){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {
      this.id = value.get("id");
    });
    // request more info here
  }
}
