import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebBackendService } from './services/web-backend.service';
import { GameBoxComponent } from './components/game-box/game-box.component';
import { IndexComponent } from './pages/index/index.component';
import { GameViewComponent } from './pages/game-view/game-view.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    GameBoxComponent,
    IndexComponent,
    GameViewComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WebBackendService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
