import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './libs/content/login/login.component';
import { ListComponent } from './libs/content/list/engineer-list.component';
import { EngineerDetailComponent } from './libs/content/engineer-detail/engineer-detail.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'engineer-list', component: ListComponent},
  { path: 'engineer-detail/:id', component: EngineerDetailComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
