package com.app.dto;

import java.util.List;

public class AuthenticationResponse {
	private final String jwt;
	private String type = "Bearer";
	private int id;
	private String userName;
	private String email;
	
	private List<String> roles;

	public AuthenticationResponse(String jwt, int id, String userName, String email, List<String> roles) {
		super();
		this.jwt = jwt;
		this.id = id;
		this.userName = userName;
		this.email = email;
		this.roles = roles;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public String getJwt() {
		return jwt;
	}

	
}
