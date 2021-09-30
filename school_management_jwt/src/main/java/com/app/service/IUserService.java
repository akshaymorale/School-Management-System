package com.app.service;

import com.app.dto.SignUpRequest;
import com.app.dto.UserResponseDTO;

//User Registration
public interface IUserService {
	UserResponseDTO registerUser(SignUpRequest request);
}
