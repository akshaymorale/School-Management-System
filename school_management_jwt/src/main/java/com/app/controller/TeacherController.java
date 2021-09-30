package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.FeedbackRequest;
import com.app.dto.FeedbackResponseDTO;
import com.app.dto.TeacherResponseDTO;
import com.app.dto.TeacherSignupRequest;
import com.app.pojos.Feedback;
import com.app.pojos.Teacher;
import com.app.service.IFeedbackService;
import com.app.service.ITeacherService;

@CrossOrigin
@RestController
@RequestMapping("/teacher")
public class TeacherController {

	@Autowired
	private ITeacherService teacherService;
	
	@Autowired
	private IFeedbackService feedbackService;
	
	@PostMapping("/register")
	public ResponseEntity<TeacherResponseDTO> registerTeacher(@RequestBody TeacherSignupRequest teacherRequest) {
		System.out.println("In teacher signup request "+teacherRequest);
		return ResponseEntity.ok(teacherService.registerTeacher(teacherRequest));
	}
	
	@GetMapping("/list")
	public List<Teacher> fetchAllTeachers() {
		System.out.println("in fetch all Teachers");
		return teacherService.getAllTeachers();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getTeacherDetails(@PathVariable int id) {
		System.out.println("in get Teacher details " +id);
		return ResponseEntity.ok(teacherService.getDetails(id));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTeacherDetails(@PathVariable int id) {
		System.out.println("in delete Teacher details " + id);
		return ResponseEntity.ok(teacherService.deleteTeacher(id));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateTeacherDetails(@RequestBody Teacher teacher, @PathVariable int id) {
		System.out.println("in update Teacher " + teacher + " " + id);
		Teacher existingTeacher = teacherService.getDetails(id);
		System.out.println(existingTeacher);
		return ResponseEntity.ok(teacherService.updateDetails(teacher));
	}
	
	@PostMapping("/feedback")
	@PreAuthorize("hasRole('TEACHER')")
	public ResponseEntity<?> addFeedback(@RequestBody Feedback feedbackrequest) {
		System.out.println("In feedback request " + feedbackrequest);
		return ResponseEntity.ok(feedbackService.addFeedback(feedbackrequest));
	}
}
