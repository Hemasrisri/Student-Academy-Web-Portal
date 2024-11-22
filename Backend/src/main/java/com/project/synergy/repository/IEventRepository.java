package com.project.synergy.repository;

import com.project.synergy.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IEventRepository extends JpaRepository<Event,Long>
{
    List<Event> findByUserId(Long userId);
}
