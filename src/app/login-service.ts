import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, Observer, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HeaderInterceptor } from './token.interceptor';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  

  constructor(private http: HttpClient) { }

  GetUser(username: string, password: string): Observable<any> {
    // console.log("API URL: ", this.api_url)
    // console.log("Username: ", username);
    // console.log("Password: ", password);
    const headers = { }

     return this.http.get(this.api_url + 'Users/Login/' + username + '/' + password,{ observe: 'response', headers })

  }

  GetCarrierById(id: string): Observable<any> {
    return this.http.get(this.api_url + 'carriers/GetCarrier/' + id);
  }

}
