package com.project.synergy.service.impl;

import com.project.synergy.model.Message;
import com.project.synergy.model.User;
import com.project.synergy.repository.IMessageRepository;
import com.project.synergy.service.IMessageService;
import com.project.synergy.utils.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class MessageService implements IMessageService
{
    @Autowired
    private IMessageRepository messageRepository;

    @Override
    public Message sendMessage(Message message) {
        return messageRepository.save(message);
    }

    @Override
    public List<Message> getMessages(Long sender, Long receiver) {
        return messageRepository.findBySenderAndReceiverOrderByTimestampAsc(sender, receiver);
    }


    @Override
    public byte[] downloadFile(String filename) {
        Message message = messageRepository.findByFilename(filename);
        if (message != null && message.getData() != null) {
            return message.getData();
        } else {
            return null;
        }
    }
}

