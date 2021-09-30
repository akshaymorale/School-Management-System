package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.FeedbackRepository;
import com.app.dto.FeedbackRequest;
import com.app.dto.FeedbackResponseDTO;
import com.app.pojos.Feedback;

@Service
@Transactional
public class FeedbackServiceImpl implements IFeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepo;
	
	@Override
	public Feedback addFeedback(Feedback feedback) {
		System.out.println("Feedback "+feedback);
//		Feedback fback = new Feedback();
//		BeanUtils.copyProperties(feedback, fback);
//		System.out.println("Fback " +fback);
//		FeedbackResponseDTO feedbackDTO = new FeedbackResponseDTO();
//		BeanUtils.copyProperties(feedbackRepo.save(fback), feedbackDTO);
		//System.out.println("Feedback Response DTO" +feedbackDTO);
		return feedbackRepo.save(feedback);
	}

	@Override
	public List<Feedback> getAllFeedbacks(int studentId) {
		System.out.println("In get all feedbacks for student id " + studentId);
		return feedbackRepo.getAllFeedbacks(studentId);
	}

}
