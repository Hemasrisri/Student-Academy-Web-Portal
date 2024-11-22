package com.project.synergy.service;

import com.project.synergy.model.Feedback;

import java.util.List;

public interface IFeedbackService
{
    Feedback addFeedBack(Feedback feedback);

    List<Feedback> getAllFeedbacks();

    Feedback getFeedBackById(Long id);

    List<Feedback> getFeedbackByReceiverId(Long receiverId);

    void deleteFeedBackById(Long id);
}
