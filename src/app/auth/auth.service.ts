import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    const SavedToken = JSON.parse(localStorage.getItem('key'));
    // Check whether the token is expired and return
    // true or false
    return SavedToken;
  }
}