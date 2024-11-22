package com.project.synergy.controller;

import com.project.synergy.model.Event;
import com.project.synergy.model.User;
import com.project.synergy.service.IEventService;
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
@RequestMapping("/event")
@CrossOrigin("*")
public class EventController
{
    @Autowired
    private IEventService service;

    @Autowired
    private IUserService userService;

    @PostMapping("/add/{userId}") // Update path variable to userId
    private ResponseEntity<?> addEvents(@PathVariable Long userId,
                                        String eventName,
                                        String address,
                                        String contact,
                                        String organizer,
                                        Double contributedAmount,
                                        String typeOfEvent,
                                        Integer maxParticipants,
                                        String eventDate,
                                        String eventDescription,
                                        MultipartFile poster
    ) throws IOException {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            User user = userService.findById(userId);

            String filepath = Paths.get("").toAbsolutePath().toString();
            Path originalFilePath = Paths.get(filepath, "src", "main", "resources", "static", "Images", poster.getOriginalFilename());
            String host = "http://localhost:8080/Images/" + poster.getOriginalFilename();
            poster.transferTo(originalFilePath);

            Event event = Event.builder()
                    .userId(userId)
                    .eventName(eventName)
                    .address(address)
                    .contact(contact)
                    .organizer(organizer)
                    .contributedAmount(contributedAmount)
                    .typeOfEvent(typeOfEvent)
                    .maxParticipants(maxParticipants)
                    .eventDate(eventDate)
                    .eventDescription(eventDescription)
                    .poster(host)
                    .build();

            service.addEvent(event);
            user.getEvents().add(event);
            userService.updateUser(user);
            res.put("success",true);
            res.put("msg","Event Added Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to Add the events");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping
    private ResponseEntity<?> getAllEvents(){
        HashMap<String,Object> res = new HashMap<>();
        try{
            List<Event> events = service.getAllEvents();
            res.put("success",true);
            res.put("events",events);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the available users");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/{id}")
    private ResponseEntity<?> getEventsById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try{
            Event event = service.getEventById(id);
            res.put("success",true);
            res.put("event",event);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","failed to fetch the available events by provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @GetMapping("/user/{userId}")
    private ResponseEntity<?> getEventsByUserId(@PathVariable Long userId)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Event> event = service.getEventsByUserId(userId);
            res.put("success",true);
            res.put("Events",event);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch(Exception e)
        {
            res.put("success",true);
            res.put("msg","Failed to fetch the available events by provided user id is"+userId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteEventById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try{
            service.deleteEventById(id);
            res.put("success",true);
            res.put("msg","Event Successfully deleted");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to delete the event by provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }
}
