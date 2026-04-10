package com.example.demo.repository;

import com.example.demo.model.TherapyBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TherapyBookingRepository extends JpaRepository<TherapyBooking, Long> {
}
