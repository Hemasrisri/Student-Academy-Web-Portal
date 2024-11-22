package com.project.synergy.controller;

import com.project.synergy.dto.MessageDto;
import com.project.synergy.model.Message;
import com.project.synergy.model.User;
import com.project.synergy.service.IMessageService;
import com.project.synergy.service.IUserService;
import com.project.synergy.utils.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/message")
@CrossOrigin("*")
public class MessageController
{
    @Autowired
    private IMessageService service;

    @Autowired
    private IUserService userService;

    @GetMapping("/{sender}/{receiver}")
    public ResponseEntity<?> getMessages(@PathVariable Long sender, @PathVariable Long receiver)
    {
        HashMap<String,Object> res = new HashMap<>();
        try{
            if (sender.equals(receiver)) {
                res.put("success", false);
                res.put("msg", "Sender and receiver cannot be the same user.");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }
            List<Message> messages = service.getMessages(sender,receiver);
            res.put("success",true);
            res.put("msg",messages);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch(Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the conversation");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }

    }

    @PostMapping
    public ResponseEntity<?> saveMessage(
            @RequestParam("sender") Long senderId,
            @RequestParam("receiver") Long receiverId,
            @RequestParam("content") String content,
            @RequestParam(value = "file", required = false) MultipartFile file) throws IOException {

        HashMap<String,Object> res = new HashMap<>();

        try {
            // Retrieve sender and receiver
            User sender = userService.findById(senderId);
            User receiver = userService.findById(receiverId);

            if (sender != null && receiver != null) {
                Message message = Message.builder()
                        .sender(sender)
                        .receiver(receiver)
                        .content(content)
                        .filename(UUID.randomUUID().toString())
                        .timestamp(LocalDateTime.now())
                        .build();

                if (file != null && !file.isEmpty()) {
                    // Process file data
                    message.setData(FileUtils.compressImage(file.getBytes()));
                }

                service.sendMessage(message);
                res.put("success", true);
                res.put("msg", "Message sent successfully");
                return ResponseEntity.status(HttpStatus.OK).body(res);
            } else {
                res.put("success", false);
                res.put("msg", "Invalid sender or receiver");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }
        } catch (Exception e) {
            res.put("success", false);
            res.put("msg", "Message sending failed");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
        }
    }

    @GetMapping("/download/{filename}")
    public ResponseEntity<?> downloadFile(@PathVariable String filename) {
        byte[] fileData = service.downloadFile(filename);
        if (fileData != null) {
            return ResponseEntity.ok()
                    .contentType(determineContentType(filename))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                    .body(fileData);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    private MediaType determineContentType(String filename) {
        String extension = filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
        switch (extension) {
            case "txt": return MediaType.TEXT_PLAIN;
            case "pdf": return MediaType.APPLICATION_PDF;
            case "jpg": case "jpeg": return MediaType.IMAGE_JPEG;
            case "png": return MediaType.IMAGE_PNG;
            case "xlsx": return MediaType.APPLICATION_XML;
            default: return MediaType.APPLICATION_OCTET_STREAM;
        }
    }
}
