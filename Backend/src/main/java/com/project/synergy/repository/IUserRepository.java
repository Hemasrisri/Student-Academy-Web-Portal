package com.project.synergy.repository;

import com.project.synergy.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User,Long>
{
    User findByEmailAndPassword(String email,String password);

    User findByName(String name);
}
