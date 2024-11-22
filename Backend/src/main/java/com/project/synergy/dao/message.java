package com.project.synergy.dao;

import com.project.synergy.model.User;
import java.time.LocalDateTime;

public interface message
{
    Long id();
    User sender();
    User receiver();
    String content();
    String filename();

    byte[] data();
    LocalDateTime timestamp();
}
