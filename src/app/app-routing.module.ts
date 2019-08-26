import { BoxModelComponent } from './box-model/box-model.component';
import { LinksComponent } from './links/links.component';
import { PositionComponent } from './position/position.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: 'position', component: PositionComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'links', component: LinksComponent },
  { path: 'box-model', component: BoxModelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
