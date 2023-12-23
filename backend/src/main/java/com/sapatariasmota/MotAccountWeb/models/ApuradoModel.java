package com.sapatariasmota.MotAccountWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Data
@Entity
@Table(name = "TB_APURADOS")
public class ApuradoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idApurado;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "idLoja")
    private LojaModel loja;

    private LocalDate data;
    private BigDecimal valor;


}
