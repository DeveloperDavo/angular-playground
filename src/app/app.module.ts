import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainModule} from './main/main.module';
import {DetailModule} from './detail/detail.module';
import {AppRoutingModule} from './app-routing.module';
import {DragulaModule} from 'ng2-dragula';
import {SampleComponent} from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    MainModule,
    DetailModule,
    AppRoutingModule,
    DragulaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

