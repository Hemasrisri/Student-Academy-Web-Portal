package com.project.synergy.repository;

import com.project.synergy.model.Feedback;
import com.project.synergy.service.impl.FeedbackService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IFeedbackRepository extends JpaRepository<Feedback,Long>
{
    List<Feedback> getFeedbackByReceiverId(Long receiverId);
}
