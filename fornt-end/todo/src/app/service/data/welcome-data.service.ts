import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(private name:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }

  executeHelloWorldServiceWithPathVariable(name){
    let basicAuthHeaderString = this.createBasicAuthentication();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    {headers});
  }

  createBasicAuthentication(){
    let userName = "amit"
    let password = "dummy"
    let basicAuthHeaderString = "Basic " + window.btoa(userName + ":" + password);
    return basicAuthHeaderString;
  }

  //Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/amit' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //No 'Access-Control-Allow-Origin' header is present on the requested resource.

  //Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/amit' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy:
  // Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
}
