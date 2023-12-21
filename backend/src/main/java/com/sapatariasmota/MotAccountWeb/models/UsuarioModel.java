package com.sapatariasmota.MotAccountWeb.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "TB_USUARIOS",
    uniqueConstraints = {
    @UniqueConstraint(name = "uk_email", columnNames = "email"),
    @UniqueConstraint(name = "uk_nome", columnNames = "nome")
    }
)
public class UsuarioModel implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idUsuario;
    private UsuarioRole role;
    private String nome;
    private String email;
    private String senha;

    public UsuarioModel(String nome, String email, String senha, UsuarioRole role) {
        this.role = role;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public UsuarioModel() {

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.role == UsuarioRole.ADMIN) return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
