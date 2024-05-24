package com.sapatariasmota.MotAccountWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Data
@Entity
@Table(name = "TB_DESPESAS")
public class DespesaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idDespesa;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "idLoja")
    private LojaModel loja;

    private LocalDate data;
    private BigDecimal valor;
    private String discriminacao;


}
