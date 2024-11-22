package com.project.synergy.controller;

import com.project.synergy.model.User;
import com.project.synergy.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping
@CrossOrigin("*")
public class AuthenticationController
{
    @Autowired
    private IUserService service;

    @PostMapping("/user/login")
    public ResponseEntity<?> userLogin(@RequestBody HashMap<String, String> login) {
        HashMap<String,Object> res = new HashMap<>();
        try {
            String email = login.get("email");
            String password = login.get("password");

            // Check if email and password are provided
            if (email == null || password == null) {
                throw new IllegalArgumentException("Email and Password are required fields");
            }

            // Call service method to authenticate user
            User user = service.userLogin(email, password);

            if (user != null) {
                res.put("success",true);
                res.put("msg","Login Successful");
                res.put("user",user);
                return ResponseEntity.status(HttpStatus.OK).body(res);
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }
}
