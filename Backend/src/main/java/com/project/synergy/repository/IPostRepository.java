package com.project.synergy.repository;

import com.project.synergy.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IPostRepository extends JpaRepository<Post,Long>
{
    Post getPostByUserId(Long userId);
}
