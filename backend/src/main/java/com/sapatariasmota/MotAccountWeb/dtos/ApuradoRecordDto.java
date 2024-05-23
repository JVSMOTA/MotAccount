package com.sapatariasmota.MotAccountWeb.dtos;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public record ApuradoRecordDto(
        @NotNull(message = "O atributo data é obrigatório!")
        LocalDate data,
        @NotNull(message = "O atributo do apurado em espécie é obrigatório!")
        BigDecimal apuradoFisico, 
        @NotNull(message = "O atributo do apurado em cartão é obrigatório!")
        BigDecimal apuradoCartao) {
}
