package com.sapatariasmota.MotAccountWeb.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;

import java.io.Serializable;
import java.util.UUID;

@Data
@Entity
@Table(name = "TB_USUARIOS",
    uniqueConstraints = {
    @UniqueConstraint(name = "uk_email", columnNames = "email"),
    @UniqueConstraint(name = "uk_nome", columnNames = "nome")
    }
)
public class UsuarioModel extends RepresentationModel<UsuarioModel> implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idUsuario;
    private Boolean administrador;
    private String nome;
    private String email;
    private String senha;

}
