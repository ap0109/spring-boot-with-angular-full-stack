import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "amit";
  password = "";
  errorMessage = "Invalid Credentails"
  invalidLogin = false

  constructor(private router :  Router,
    private hardCodedAuthenticationService : HardCodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardCodedAuthenticationService.authenticate(this.username, this.password)){
      //Read to Welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false
    }else {
      this.invalidLogin = true
    }    
  }

  handleBasicAuthLogin(){
    //if(this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)){
      this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false
          }, 
          error => {
            console.log(error);
            this.invalidLogin = true
          }
        )
  }

}
