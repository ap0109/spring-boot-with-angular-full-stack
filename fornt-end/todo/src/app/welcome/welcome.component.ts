import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Some Welcome Message!"
  name= ''
  welcomeMessage=''
  constructor(
    private service: WelcomeDataService,
    private route : ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
    console.log(this.name); 
  }

  getWelcomeMessage(){   
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter(){   
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfullResponse(response){
    this.welcomeMessage = response.name;  
  }

  handleErrorResponse(error){
    this.welcomeMessage = error.error.message;
    
  }

}
