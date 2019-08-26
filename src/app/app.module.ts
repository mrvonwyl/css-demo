import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DisplayComponent } from './display/display.component';
import { LinksComponent } from './links/links.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { GeneralInfoComponent } from './general-info/general-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    NavigationComponent,
    DisplayComponent,
    LinksComponent,
    BoxModelComponent,
    GeneralInfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
