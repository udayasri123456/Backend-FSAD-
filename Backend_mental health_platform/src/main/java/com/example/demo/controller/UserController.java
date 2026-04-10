package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*") // Allows requests from any frontend port initially
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {
        Optional<User> userOptional = userRepository.findByUsername(loginUser.getUsername());
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(loginUser.getPassword()) &&
                user.getRole().equalsIgnoreCase(loginUser.getRole())) {
                return ResponseEntity.ok().body("{\"message\": \"Login successful\", \"role\": \"" + user.getRole() + "\"}");
            }
        }
        
        return ResponseEntity.status(401).body("{\"message\": \"Invalid credentials\"}");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("{\"message\": \"Username already exists\"}");
        }
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }
}
