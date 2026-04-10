package com.example.demo.controller;

import com.example.demo.model.TherapyBooking;
import com.example.demo.repository.TherapyBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*")
public class TherapyBookingController {

    @Autowired
    private TherapyBookingRepository bookingRepository;

    @PostMapping
    public ResponseEntity<?> bookSession(@RequestBody TherapyBooking booking) {
        if (booking.getDate() == null || booking.getTime() == null) {
             return ResponseEntity.badRequest().body("{\"message\": \"Date and Time are required\"}");
        }
        TherapyBooking savedBooking = bookingRepository.save(booking);
        return ResponseEntity.ok(savedBooking);
    }

    @GetMapping
    public ResponseEntity<List<TherapyBooking>> getAllBookings() {
        return ResponseEntity.ok(bookingRepository.findAll());
    }
}
