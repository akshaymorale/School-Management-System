package com.app.service;

import java.util.List;

import com.app.dto.StudentResponseDTO;
import com.app.dto.StudentSignupRequest;
import com.app.pojos.Student;

public interface IStudentService {
	StudentResponseDTO registerStudent(StudentSignupRequest studentRequest);
	List<Student> getAllStudents();
	
	Student getDetails(int studentId);
	
	StudentResponseDTO updateDetails(Student studentRequest);
	
	String deleteStudent(int studentId);
}
