package com.app.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exception.UserHandlingException;
import com.app.dao.RoleRepository;
import com.app.dao.StudentRepository;
import com.app.dto.StudentResponseDTO;
import com.app.dto.StudentSignupRequest;
import com.app.pojos.Role;
import com.app.pojos.Student;
import com.app.pojos.UserRoles;

@Service
@Transactional
public class StudentServiceImpl implements IStudentService {
	
	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private StudentRepository studentRepo;
	
	
	@Override
	public StudentResponseDTO registerStudent(StudentSignupRequest studentRequest) {
		System.out.println("student request"+studentRequest);
		Student student = new Student();
		BeanUtils.copyProperties(studentRequest, student);
		System.out.println("student "+student);
		student.setPassword(encoder.encode(studentRequest.getPassword()));// set encoded pwd
		//student.getRoles().add(roleRepo.findByUserRole(UserRoles.ROLE_STUDENT).get());
		Set<Role> roles = studentRequest.getRoles().stream()
				.map(roleName -> roleRepo.findByUserRole(UserRoles.valueOf(roleName)).get())
				.collect(Collectors.toSet());
		student.setRoles(roles);
		
		student.setActive(true);
		System.out.println("student " + student);
		StudentResponseDTO studentDTO = new StudentResponseDTO();
		BeanUtils.copyProperties(studentRepo.save(student), studentDTO);
		System.out.println("student resp dto " + studentDTO);

		return studentDTO;

	}


	@Override
	public List<Student> getAllStudents() {
		
		return studentRepo.findAll();
	}


	@Override
	public Student getDetails(int studentId) {
		
		return studentRepo.findById(studentId).orElseThrow(() -> new UserHandlingException("Invalid User ID !!!!"));
	}


	@Override
	public StudentResponseDTO updateDetails(Student studentRequest) {
		System.out.println("student request"+studentRequest);
		Student student = new Student();
		BeanUtils.copyProperties(studentRequest, student);
		student.setPassword(encoder.encode(studentRequest.getPassword()));
		
		student.setActive(true);
		System.out.println("student " + student);
		StudentResponseDTO studentDTO = new StudentResponseDTO();
		BeanUtils.copyProperties(studentRepo.save(student), studentDTO);
		System.out.println("student resp dto " + studentDTO);
		return studentDTO;
	}


	@Override
	public String deleteStudent(int studentId) {
		studentRepo.deleteById(studentId);
		return "User details deleted for id: " + studentId;
	}

}
