import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }
 
  authenticate(username, password){
    if(username === "amit" && password === "pass"){
      sessionStorage.setItem("authenticaterUser", username)
      return true;
    }
    return false;
    
  }

  isUserLogedIn(){
    let user = sessionStorage.getItem("authenticaterUser")
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem("authenticaterUser")
  }

}
