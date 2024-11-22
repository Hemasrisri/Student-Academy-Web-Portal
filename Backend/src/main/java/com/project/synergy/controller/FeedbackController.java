package com.project.synergy.controller;

import com.project.synergy.model.Feedback;
import com.project.synergy.model.User;
import com.project.synergy.service.IFeedbackService;
import com.project.synergy.service.IUserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/feedback")
@CrossOrigin("*")
public class FeedbackController
{
    @Autowired
    private IFeedbackService service;

    @Autowired
    private IUserService userService;

    @PostMapping
    private ResponseEntity<?> addFeedback(@RequestBody Feedback feedback) {
        HashMap<String, Object> res = new HashMap<>();
        try {
            // Validate feedback object
            if (feedback == null || feedback.getSenderId() == null || feedback.getReceiverId() == null) {
                throw new IllegalArgumentException("Invalid feedback object or missing sender/receiver ID");
            }

            User sender = userService.findById(feedback.getSenderId());
            User receiver = userService.findById(feedback.getReceiverId());
            if (sender == null || receiver == null) {
                throw new EntityNotFoundException("Sender or receiver not found");
            }

            feedback.setDate(new Date());
            // Add receiver to feedback
            feedback.setUser(receiver);

            // Add feedback
            service.addFeedBack(feedback);

            res.put("success", true);
            res.put("msg", "Feedback added successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (IllegalArgumentException | EntityNotFoundException e) {
            res.put("success", false);
            res.put("msg", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("msg", "Failed to add the feedback");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }



    @GetMapping
    private ResponseEntity<?> getAllFeedbacks()
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Feedback> feedbacks = service.getAllFeedbacks();
            res.put("success",true);
            res.put("Feedback",feedbacks);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the available feedbacks");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/{id}")
    private ResponseEntity<?> getFeedBackById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            Feedback feedback = service.getFeedBackById(id);
            res.put("success",true);
            res.put("feedback",feedback);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch(Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the feedback by provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @GetMapping("receiver/{id}")
    private ResponseEntity<?> getFeedbackByReceiverId(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Feedback> feedbackList = service.getFeedbackByReceiverId(id);
            res.put("success",true);
            res.put("Feedback",feedbackList);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","failed to fetch the available feedbacks by receiver id is "+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteFeedBackById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            service.deleteFeedBackById(id);
            res.put("success",true);
            res.put("msg","Feedback Deleted Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch(Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to delete the feedback by provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

}
