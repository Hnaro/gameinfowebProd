import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GameViewComponent } from './pages/game-view/game-view.component';

const routes: Routes = [{
  path: "",
  component: IndexComponent
},{
  path: "gameview/:id",
  component: GameViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
