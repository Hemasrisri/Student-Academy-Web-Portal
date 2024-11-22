package com.project.synergy.service;

import com.project.synergy.model.Event;

import java.util.List;

public interface IEventService
{
    Event addEvent(Event event);

    Event getEventById(Long id);

    List<Event> getEventsByUserId(Long userId);

    List<Event> getAllEvents();

    Event updateEvent(Event event);

    void deleteEventById(Long id);
}
