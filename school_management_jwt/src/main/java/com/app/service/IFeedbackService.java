package com.app.service;

import java.util.List;

import com.app.pojos.Feedback;

public interface IFeedbackService {
	Feedback addFeedback(Feedback feedbackrequest);
	
	List<Feedback> getAllFeedbacks(int studentId);
}
