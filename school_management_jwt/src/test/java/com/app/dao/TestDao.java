package com.app.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.Admin;
@SpringBootTest
class TestDao {

	@Autowired
	private StudentRepository studRepo;
	
	@Autowired
	private AdminRepository adminRepo;
	
	@Test
	void testAddStudent() {
		//Student s1 = new Student("akshay", "morale", 70.0, "Beed", "8888877777", "I");
		Admin a1 = new Admin();

	}

}
