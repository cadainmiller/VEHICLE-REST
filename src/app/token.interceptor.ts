
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const API_KEY = JSON.parse(localStorage.getItem('key'));
  //const API_KEY = "a2hlbnJ5OlgwTkZMV0kyTVRreE56RXdMVEF6TWpjdE5EQm1ZUzA0TlRjeExUWmlaRFU1TkRNeE1URXdNaTExWW0xTg=="
    console.log(API_KEY);
    return next.handle(httpRequest.clone({ setHeaders: { Authorization: 'Basic ' + API_KEY}}));
  }
}
