import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {UserService} from "./user.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]

})
export class AppModule {
}
