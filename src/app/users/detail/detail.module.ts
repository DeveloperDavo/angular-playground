import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {DetailComponent} from './detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../user.service';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
})
export class DetailModule {
}
