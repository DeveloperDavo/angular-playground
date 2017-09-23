import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {DetailComponent} from './detail/detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

