package com.sapatariasmota.MotAccountWeb.repositories;

import com.sapatariasmota.MotAccountWeb.models.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, UUID> {

    public UserDetails findByEmail(String email);
}
