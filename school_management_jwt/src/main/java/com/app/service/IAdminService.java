package com.app.service;

import com.app.dto.AdminResponseDTO;
import com.app.dto.AdminSignupRequest;

public interface IAdminService {
	AdminResponseDTO registerAdmin(AdminSignupRequest adminRequest);
}
