package com.example.demo.config;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    public CommandLineRunner loadData(UserRepository userRepository) {
        return args -> {
            if (userRepository.count() == 0) {
                User student = new User();
                student.setUsername("udayasri");
                student.setPassword("1234");
                student.setRole("Student");
                userRepository.save(student);

                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword("admin");
                admin.setRole("Admin");
                userRepository.save(admin);
                
                System.out.println("Default users seeded: udayasri/1234 (Student), admin/admin (Admin)");
            }
        };
    }
}
