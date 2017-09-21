import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DetailComponent} from './detail/detail.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
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

