package com.project.synergy.service;

import com.project.synergy.model.Post;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface IPostService
{
    Post addPost(Post post);


    Post getPostByUserId(Long userId);

    List<Post> getAllPosts();

    Post getPostById(Long id);

    void deletePostById(Long id);
}
