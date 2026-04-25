package com.example.demo.controller;

import com.example.demo.model.Patient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    // GET /patients
    @GetMapping
    public ResponseEntity<List<Patient>> getPatients() {
        List<Patient> patients = Arrays.asList(
                new Patient(1, "Arjun", 21),
                new Patient(2, "Ravi", 25),
                new Patient(3, "Neha", 23)
        );

        return ResponseEntity.ok(patients);
    }

    // POST /patients
    @PostMapping
    public ResponseEntity<String> addPatient(@RequestBody Patient patient) {
        System.out.println("Received Patient: " + patient.getName());

        return ResponseEntity.status(201).body("Patient added successfully");
    }
}