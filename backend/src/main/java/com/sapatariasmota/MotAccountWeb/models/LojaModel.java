package com.sapatariasmota.MotAccountWeb.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import org.springframework.hateoas.RepresentationModel;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "TB_LOJAS")
public class LojaModel extends RepresentationModel<LojaModel> implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idLoja;
    private String nome;
    private String tipo;
    private String endereco;

    @OneToMany(mappedBy = "loja")
    @JsonIgnore
    private List<ApuradoModel> apurados;

    @OneToMany(mappedBy = "loja")
    @JsonIgnore
    private List<AgendamentoModel> agendamentos;

}
