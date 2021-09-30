package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.StudentRepository;
import com.app.dto.StudentResponseDTO;
import com.app.dto.StudentSignupRequest;
import com.app.jwt_utils.JwtUtils;
import com.app.pojos.Feedback;
import com.app.pojos.Student;
import com.app.service.IFeedbackService;
import com.app.service.IStudentService;

@CrossOrigin
@RestController
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private IStudentService studentService;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private IFeedbackService feedbackService;
	
	@GetMapping("/feedback/{studentId}") 
	@PreAuthorize("hasRole('STUDENT')")
	public List<Feedback> fetchAllFeedbacks(@PathVariable int studentId) {
		System.out.println("in fetch all Feedbacks for student id: " + studentId);
		return feedbackService.getAllFeedbacks(studentId);
	}
	
	@PostMapping("/signup")
	public ResponseEntity<StudentResponseDTO> registerStudent(@RequestBody StudentSignupRequest studentRequest) {
		System.out.println("in student reg : student request " + studentRequest);
		return ResponseEntity.ok(studentService.registerStudent(studentRequest));
	}
	
	@GetMapping("/list")
	public List<Student> fetchAllStudents() {
		System.out.println("in fetch all students");
		return studentService.getAllStudents();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserDetails(@PathVariable int id) {
		System.out.println("in get Student details " +id);
		return ResponseEntity.ok(studentService.getDetails(id));
	}
	
	@DeleteMapping("/{studentId}")
	public ResponseEntity<String> deleteStudentDetails(@PathVariable int studentId) {
		System.out.println("in delete Student details " + studentId);
		return ResponseEntity.ok(studentService.deleteStudent(studentId));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateStudentDetails(@RequestBody Student student, @PathVariable int id) {
		System.out.println("in update Student " + student + " " + id);
		Student existingStudent = studentService.getDetails(id);
		System.out.println(existingStudent);
		return ResponseEntity.ok(studentService.updateDetails(student));
	}
	
	
}
