package com.project.synergy.service.impl;

import com.project.synergy.model.Event;
import com.project.synergy.repository.IEventRepository;
import com.project.synergy.service.IEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService implements IEventService
{
    @Autowired
    private IEventRepository repository;

    @Override
    public Event addEvent(Event event) {
        return repository.save(event);
    }

    @Override
    public Event getEventById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Event> getEventsByUserId(Long userId) {
        return repository.findByUserId(userId);
    }

    @Override
    public List<Event> getAllEvents() {
        return repository.findAll();
    }

    @Override
    public Event updateEvent(Event event) {
        return repository.save(event);
    }

    @Override
    public void deleteEventById(Long id) {
        repository.deleteById(id);
    }
}
