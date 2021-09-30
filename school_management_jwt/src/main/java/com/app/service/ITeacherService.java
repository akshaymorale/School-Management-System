package com.app.service;

import java.util.List;

import com.app.dto.TeacherResponseDTO;
import com.app.dto.TeacherSignupRequest;
import com.app.pojos.Teacher;

public interface ITeacherService {
	TeacherResponseDTO registerTeacher(TeacherSignupRequest teacherRequest);
	
	List<Teacher> getAllTeachers();
	
	Teacher getDetails(int teacherId);
	
	TeacherResponseDTO updateDetails(Teacher teacherRequest);
	
	String deleteTeacher(int teacherId);
	
	
}
