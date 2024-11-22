package com.project.synergy.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Event
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String eventName;
    private String address;
    private String contact;
    private String organizer;
    private Double contributedAmount;
    private String typeOfEvent;
    private Integer maxParticipants;
    private String eventDate;
    private String eventDescription;
    private String poster;
}
