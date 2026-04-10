-- 1. Create the database
CREATE DATABASE IF NOT EXISTS mental_health_db;

-- 2. Use the database
USE mental_health_db;

-- 3. Create the Users table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

-- 4. Create the Therapy Bookings table
CREATE TABLE IF NOT EXISTS therapy_bookings (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    date VARCHAR(255) NOT NULL,
    time VARCHAR(255) NOT NULL
);

-- 5. Insert default demo users
-- Student
INSERT INTO users (username, password, role) 
VALUES ('udayasri', '1234', 'Student');

-- Admin
INSERT INTO users (username, password, role) 
VALUES ('admin', 'admin', 'Admin');
