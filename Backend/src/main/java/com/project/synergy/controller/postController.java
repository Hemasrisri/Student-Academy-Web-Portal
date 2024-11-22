package com.project.synergy.controller;

import com.project.synergy.model.Post;
import com.project.synergy.model.User;
import com.project.synergy.service.IPostService;
import com.project.synergy.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/post")
@CrossOrigin("*")
public class postController
{
    @Autowired
    private IPostService postService;

    @Autowired
    private IUserService userService;

    @PostMapping
    private ResponseEntity<?> addPost(Long userId, String title, String description, MultipartFile photo) {
        HashMap<String, Object> res = new HashMap<>();
        try {

            User user = userService.findById(userId);

            if (photo != null && !photo.isEmpty()) {
                String filepath = Paths.get("").toAbsolutePath().toString();
                Path originalFilePath = Paths.get(filepath, "src", "main", "resources", "static", "Images", photo.getOriginalFilename());
                String host = "http://localhost:8080/Images/" + photo.getOriginalFilename();
                photo.transferTo(originalFilePath);

                Post post = Post.builder()
                        .userId(userId)
                        .title(title)
                        .description(description)
                        .photo(host)
                        .build();
                postService.addPost(post);
                user.getPosts().add(post);
                userService.updateUser(user);

                res.put("success", true);
                res.put("post", post);
                res.put("msg", "Post uploaded successfully");
                return ResponseEntity.status(HttpStatus.OK).body(res);
            } else {
                res.put("success", false);
                res.put("msg", "No photo provided for the post");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }
        } catch (IOException e) {
            res.put("success", false);
            res.put("msg", "Post uploading failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping
    private ResponseEntity<?> getAllPosts()
    {
        HashMap<String,Object> res = new HashMap<>();
        try{
            List<Post> posts = postService.getAllPosts();
            res.put("success",true);
            res.put("Post",posts);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch(Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the available posts");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/{userId}")
    private ResponseEntity<?> getPostByUserId(@PathVariable Long userId)
    {
        HashMap<String,Object> res = new HashMap<>();
        try{
            Post post = postService.getPostByUserId(userId);
            res.put("success",true);
            res.put("Post",post);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch(Exception e)
        {
            res.put("success",false);
            res.put("Post","Failed to fetch the available post by user id is"+userId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteUserById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try{
            postService.deletePostById(id);
            res.put("success",true);
            res.put("msg","Post Deleted Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to delete the post by provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }
}
