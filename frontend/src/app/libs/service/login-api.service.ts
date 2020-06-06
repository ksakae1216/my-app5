import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginListService } from 'frontend/src/app/mock/login/login-list.service';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient, private loginlistservice: LoginListService) { }

  private url: string = "mock-server/loginlist";

  private httpOptions = {
    headers: new HttpHeaders(),
    body: null
  }

  public getList(): Promise<object[]> {
    // this.httpOptions.headers = this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    console.log(this.httpOptions.headers);
    return this.http.get(this.url, this.httpOptions)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(err => {
      console.log('Error occured.', err);
      return Promise.reject(err.message || err);
    });
  }

  public isAllowLogin(loginid:string, password:string): boolean {
    return this.loginlistservice.isAllowLogin(loginid, password);
  }

}
