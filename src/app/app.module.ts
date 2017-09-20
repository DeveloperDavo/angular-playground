import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {DetailComponent} from './detail/detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {TempComponent} from './temp/temp.component';

const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'temp', component: TempComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    TempComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

