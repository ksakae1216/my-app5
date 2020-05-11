import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpListService {

  constructor(private http: HttpClient) { }

  private host: string = "http://localhost:8080/engineer";

  private httpOptions = {
    headers: new HttpHeaders(),
    body: null
  }

  public get(): Promise<object[]> {
    // this.httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.get(this.host, this.httpOptions)
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
}
