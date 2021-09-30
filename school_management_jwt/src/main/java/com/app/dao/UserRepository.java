package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User, Long> {
	@Query("select distinct u from User u join fetch u.roles where u.userName=:nm")
	Optional<User> findByUserName(@Param("nm") String userName);
}
