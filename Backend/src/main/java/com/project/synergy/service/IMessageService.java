package com.project.synergy.service;

import com.project.synergy.model.Message;
import com.project.synergy.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface IMessageService
{
    Message sendMessage(Message message);

    List<Message> getMessages(Long sender, Long receiver);

    byte[] downloadFile(String filename);
}
