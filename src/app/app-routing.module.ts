import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelineComponent} from "./timeline/timeline.component";
import {UserLoginComponent} from "./user-login/user-login.component";

const routes: Routes = [
  { path: 'timeline', component: TimelineComponent },
  { path: 'userlogin', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


