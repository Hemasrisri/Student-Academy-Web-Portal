package com.project.synergy.controller;

import com.project.synergy.model.User;
import com.project.synergy.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController
{
    @Autowired
    private IUserService service;

    @PostMapping("/register")
    private ResponseEntity<?> registerUser(
            String name,
            String email,
            String password,
            String phone,
            String college,
            String yearOfStudy,
            String achievements,
            String stream,
            String goals,
            String interests,
            String skills,
            MultipartFile photo) throws IOException {
        HashMap<String, Object> res = new HashMap<>();
        try {
            // Handle file upload - Save the studentPhoto to the desired location
            String filepath = Paths.get("").toAbsolutePath().toString();
            Path originalFilePath = Paths.get(filepath, "src", "main", "resources", "static", "Images", photo.getOriginalFilename());
            String host = "http://localhost:8080/Images/" + photo.getOriginalFilename();
            photo.transferTo(originalFilePath);

            // Create a new student object
            User user = User.builder()
                    .name(name)
                    .email(email)
                    .password(password)
                    .college(college)
                    .phone(phone)
                    .yearOfStudy(yearOfStudy)
                    .achievements(achievements)
                    .stream(stream)
                    .goals(goals)
                    .interests(interests)
                    .skills(skills)
                    .photo(host)
                    .build();

            service.addUser(user);
            res.put("success", true);
            res.put("msg", "User Registered Successfully");

            return ResponseEntity.status(HttpStatus.CREATED).body(res);
        } catch (IOException ioe) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to save user's photo. Please try again.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred while adding the user.");
        }

    }

    @GetMapping
    private ResponseEntity<?> getAllUsers()
    {
        HashMap<String,Object> res = new HashMap<>();
        try{
            List<User> user = service.getAllUsers();
            res.put("success",true);
            res.put("User",user);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch(Exception e)
        {
            res.put("success",true);
            res.put("msg","Failed to retrieve the available users");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }

    }

    @GetMapping("/{id}")
    private ResponseEntity<?> getUserById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try{
            User user = service.findById(id);
            res.put("success",true);
            res.put("user",user);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch(Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to retrieve the user by id"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @PutMapping("/{id}")
    private ResponseEntity<?> updateUser(@PathVariable Long id,
                                         String name,
                                         String email,
                                         String password,
                                         String phone,
                                         String college,
                                         String yearOfStudy,
                                         String achievements,
                                         String stream,
                                         String goals,
                                         String interests,
                                         String skills,
                                         MultipartFile photo) throws IOException
    {
        HashMap<String,Object> res = new HashMap<>();
        try{
            String filepath = Paths.get("").toAbsolutePath().toString();
            Path originalFilePath = Paths.get(filepath, "src", "main", "resources", "static", "Images", photo.getOriginalFilename());
            String host = "http://localhost:8080/Images/" + photo.getOriginalFilename();
            photo.transferTo(originalFilePath);

            User user = service.findById(id);
            user.setName(name);
            user.setEmail(email);
            user.setPassword(password);
            user.setPhone(phone);
            user.setCollege(college);
            user.setYearOfStudy(yearOfStudy);
            user.setAchievements(achievements);
            user.setStream(stream);
            user.setGoals(goals);
            user.setInterests(interests);
            user.setSkills(skills);
            user.setPhoto(host);

            service.updateUser(user);

            res.put("success",true);
            res.put("msg","User updated successfully");
            res.put("User",user);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to update the user");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteUserById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            service.deleteUserById(id);
            res.put("success",true);
            res.put("msg","successfully delete the user");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch(Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to delete the user by provided id is"+id);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }
}

