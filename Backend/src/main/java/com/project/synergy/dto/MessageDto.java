package com.project.synergy.dto;

import lombok.Data;

@Data
public class MessageDto
{
    private String sender;
    private String receiver;
    private String content;
}
