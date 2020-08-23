package com.amit.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {

	
	@GetMapping(path="/basicauth")
	public AuthenticationBean helloWorldBean(){
		// This is just to check that if error will come then how message will get showed up on UI
		//throw new RuntimeException("Some error has happened! Contact supoort team ***-***");
		
		return new AuthenticationBean("You are Authenticated");
	}
}
