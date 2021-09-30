package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
	@Query("SELECT f from Feedback f WHERE f.studentId=:sid")
	List<Feedback> getAllFeedbacks(@Param("sid") int studentId);

}
