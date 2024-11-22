package com.project.synergy.service.impl;

import com.project.synergy.model.Post;
import com.project.synergy.model.User;
import com.project.synergy.repository.IPostRepository;
import com.project.synergy.repository.IUserRepository;
import com.project.synergy.service.IPostService;
import com.project.synergy.utils.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PostService implements IPostService
{
    @Autowired
    private IPostRepository repository;

    @Autowired
    private IUserRepository userRepository;

    @Override
    public Post addPost(Post post) {
        return repository.save(post);
    }


    @Override
    public Post getPostByUserId(Long userId) {
        return repository.getPostByUserId(userId);
    }

    @Override
    public List<Post> getAllPosts() {
        return repository.findAll();
    }

    @Override
    public Post getPostById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public void deletePostById(Long id) {
        repository.deleteById(id);
    }
}
