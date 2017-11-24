import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {UserService} from '../user.service';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService]
})
export class MainModule {
}
