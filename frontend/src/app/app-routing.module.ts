import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'frontend/src/app/libs/content/login/login.component';
import { ListComponent } from 'frontend/src/app/libs/content/list/list.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'list', component: ListComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
