package com.project.synergy.service.impl;

import com.project.synergy.model.User;
import com.project.synergy.repository.IUserRepository;
import com.project.synergy.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService
{
    @Autowired
    private IUserRepository repository;

    @Override
    public User addUser(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User findById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public User updateUser(User user) {
        return repository.save(user);
    }

    @Override
    public void deleteUserById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public User getUserByName(String sender) {
        return repository.findByName(sender);
    }

    @Override
    public User userLogin(String email, String password) {
        return repository.findByEmailAndPassword(email, password);
    }
}
