package com.amit.rest.webservices.restfulwebservices.helloworld;

public class AuthenticationBean {
	
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public AuthenticationBean(String name) {
		super();
		this.name = name;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [name=" + name + "]";
	}

}
