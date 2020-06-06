import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class LoginListService implements InMemoryDbService {

  private api: any = {
    loginlist: [
      {loginid: 'inu', password: 'one'},
      {loginid: 'neko', password: 'nya'}
    ]
  };

  public createDb(): any {
    return this.api;
  }

  public isAllowLogin(loginid:string, password:string): boolean {
    //Mockなので基本ログインOK
    return true;
  }
}
