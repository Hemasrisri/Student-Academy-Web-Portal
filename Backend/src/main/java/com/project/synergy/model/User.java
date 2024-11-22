package com.project.synergy.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String phone;
    private String college;
    private String yearOfStudy;
    private String stream;
    private String achievements;
    private String goals;
    private String interests;
    private String skills;
    private String photo;

    @ManyToMany
    private List<Event> events;

    @ManyToMany
    private List<Post> posts;


}
