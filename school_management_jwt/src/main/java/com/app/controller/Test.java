package com.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({"/hello"})
public class Test {
	
	public String hello() {
		return "Hello World";
	}
}
