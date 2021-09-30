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
import com.app.dao.TeacherRepository;
import com.app.dto.TeacherResponseDTO;
import com.app.dto.TeacherSignupRequest;
import com.app.pojos.Role;
import com.app.pojos.Teacher;
import com.app.pojos.UserRoles;

@Service
@Transactional
public class TeacherServiceImpl implements ITeacherService {

	@Autowired
	private RoleRepository roleRepo;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private TeacherRepository teacherRepo;
	
	@Override
	public TeacherResponseDTO registerTeacher(TeacherSignupRequest teacherRequest) {
		System.out.println("Teacher Request "+teacherRequest);
		Teacher teacher = new Teacher();
		BeanUtils.copyProperties(teacherRequest, teacher);
		System.out.println("Teacher "+teacher);
		teacher.setPassword(encoder.encode(teacherRequest.getPassword()));
		
		Set<Role> roles = teacherRequest.getRoles().stream()
				.map(roleName -> roleRepo.findByUserRole(UserRoles.valueOf(roleName)).get())
				.collect(Collectors.toSet());
		teacher.setRoles(roles);
		
		teacher.setActive(true);
		TeacherResponseDTO teacherDTO = new TeacherResponseDTO();
		BeanUtils.copyProperties(teacherRepo.save(teacher), teacherDTO);
		System.out.println("Teacher response DTO "+teacherDTO);
		
		return teacherDTO;
	}

	@Override
	public List<Teacher> getAllTeachers() {
		
		return teacherRepo.findAll();
	}
	
	@Override
	public Teacher getDetails(int teacherId) {
		
		return teacherRepo.findById(teacherId).orElseThrow(() -> new UserHandlingException("Invalid User ID !!!!"));
	}

	@Override
	public TeacherResponseDTO updateDetails(Teacher teacherRequest) {
		System.out.println("Teacher Request "+teacherRequest);
		Teacher teacher = new Teacher();
		BeanUtils.copyProperties(teacherRequest, teacher);
		System.out.println("Teacher "+teacher);
		teacher.setPassword(encoder.encode(teacherRequest.getPassword()));
		teacher.setActive(true);
		
		teacher.setRoles(teacherRequest.getRoles());
		TeacherResponseDTO teacherDTO = new TeacherResponseDTO();
		BeanUtils.copyProperties(teacherRepo.save(teacher), teacherDTO);
		System.out.println("Teacher response DTO "+teacherDTO);
		return teacherDTO;
	}

	@Override
	public String deleteTeacher(int teacherId) {
		teacherRepo.deleteById(teacherId);
		return "Teacher details deleted for id: " + teacherId;
	}


	


	
	
}
