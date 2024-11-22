package com.project.synergy.repository;

import com.project.synergy.model.Message;
import com.project.synergy.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IMessageRepository extends JpaRepository<Message,Long>
{
    @Query(value = "SELECT * FROM message WHERE (sender_id = ?1 AND receiver_id = ?2) OR (sender_id = ?2 AND receiver_id = ?1) ORDER BY timestamp ASC", nativeQuery = true)
    List<Message> findBySenderAndReceiverOrderByTimestampAsc(Long sender, Long receiver);

    Message findByFilename(String filename);
}
