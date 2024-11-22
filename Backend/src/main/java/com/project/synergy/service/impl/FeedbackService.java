package com.project.synergy.service.impl;

import com.project.synergy.model.Feedback;
import com.project.synergy.repository.IFeedbackRepository;
import com.project.synergy.service.IFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService implements IFeedbackService
{
    @Autowired
    private IFeedbackRepository repository;

    @Override
    public Feedback addFeedBack(Feedback feedback) {
        return repository.save(feedback);
    }

    @Override
    public List<Feedback> getAllFeedbacks() {
        return repository.findAll();
    }

    @Override
    public Feedback getFeedBackById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Feedback> getFeedbackByReceiverId(Long receiverId) {
        return repository.getFeedbackByReceiverId(receiverId);
    }

    @Override
    public void deleteFeedBackById(Long id) {
        repository.deleteById(id);
    }
}
