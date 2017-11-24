import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './users/main/main.component';
import {DetailComponent} from './users/detail/detail.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'detail/:id', component: DetailComponent},
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

