import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const AUTHENTICATED_USER = 'authenticaterUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http :  HttpClient) { }

  executeAuthenticationService(userName, password){
    let basicAuthHeaderString = "Basic " + window.btoa(userName + ":" + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    // "pipe method allows us to declare what should be done if the success of the service "
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth/`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, userName);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLogedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean{
  constructor(public name: string){

  }
}
