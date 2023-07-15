// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { GameBoxComponent } from './components/game-box/game-box.component';
import { IndexComponent } from './pages/index/index.component';
import { GameViewComponent } from './pages/game-view/game-view.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

// services
import { WebBackendService } from './services/web-backend.service';
import { SearchService } from './services/search.service';
import { SelectionComponent } from './components/selection/selection.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoxComponent,
    IndexComponent,
    GameViewComponent,
    SearchBarComponent,
    SelectionComponent,
    SlidebarComponent,
    FooterComponent,
    AboutComponent
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
