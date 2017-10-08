import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainModule} from './main/main.module';
import {DetailModule} from './detail/detail.module';
import {AppRoutingModule} from './app-routing.module';
import {DragulaModule} from 'ng2-dragula';
import {SampleComponent} from './sample/sample.component';
import {BrowserModule} from '@angular/platform-browser';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ProjectComponent
  ],
  imports: [
    MainModule,
    DetailModule,
    AppRoutingModule,
    DragulaModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

