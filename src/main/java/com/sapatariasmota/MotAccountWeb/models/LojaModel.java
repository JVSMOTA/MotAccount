package com.sapatariasmota.MotAccountWeb.models;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.hateoas.RepresentationModel;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Data
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
    private List<ApuradoModel> apurados;

}
