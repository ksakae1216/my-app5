import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EngineerApiService {

  constructor(private http: HttpClient) { }

  private host = 'mock-server/';

  private httpOptions = {
    headers: new HttpHeaders(),
    body: null
  };

  public getList(url: string) {
    // this.httpOptions.headers = this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    // console.log(this.httpOptions.headers);
    return this.http.get(this.host + url, this.httpOptions);
  }

  public getRow(url: string) {
    // this.httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.get(this.host + url, this.httpOptions);
  }

}
