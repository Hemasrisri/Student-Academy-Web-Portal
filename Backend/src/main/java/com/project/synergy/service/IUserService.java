package com.project.synergy.service;

import com.project.synergy.model.User;

import java.util.List;

public interface IUserService
{
    User addUser(User user);

    List<User> getAllUsers();

    User findById(Long id);

    User updateUser(User user);

    void deleteUserById(Long id);


    User getUserByName(String sender);

    User userLogin(String email, String password);
}
