import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebBackendService } from './services/web-backend.service';
import { GameBoxComponent } from './components/game-box/game-box.component';
import { IndexComponent } from './pages/index/index.component';
import { GameViewComponent } from './pages/game-view/game-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoxComponent,
    IndexComponent,
    GameViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WebBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
