import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainModule} from './users/main/main.module';
import {DetailModule} from './users/detail/detail.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    DetailModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

