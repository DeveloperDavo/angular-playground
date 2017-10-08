import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DetailComponent} from './detail/detail.component';
import {NgModule} from '@angular/core';
import {SampleComponent} from "./sample/sample.component";

const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'sample', component: SampleComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

