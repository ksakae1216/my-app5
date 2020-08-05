import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './libs/content/login/login.component';
import { ListComponent } from './libs/content/engineer-list/engineer-list.component';
import { EngineerDetailComponent } from './libs/content/engineer-detail/engineer-detail.component';

import { EngineerApiService } from './libs/service/engineer-api.service';
import { LoginListService } from './mock/login/login-list.service';
import { EngineerDataService } from './mock/engineer/engineer-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    EngineerDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Todo: APIの数だけ記載（でもAPIの分だけ記載するのは良い方法とは思えない。もっと良い方法があるはず）
    InMemoryWebApiModule.forRoot(LoginListService, {delay:1000}),
    InMemoryWebApiModule.forRoot(EngineerDataService, {delay:1000}),
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [EngineerApiService, LoginListService, EngineerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
