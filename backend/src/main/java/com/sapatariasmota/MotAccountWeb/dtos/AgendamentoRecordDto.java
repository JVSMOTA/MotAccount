package com.sapatariasmota.MotAccountWeb.dtos;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public record AgendamentoRecordDto(
        @NotNull(message = "O atributo data é obrigatório!")
        LocalDate data,
        @NotNull(message = "O atributo valor é obrigatório!")
        BigDecimal valor,
        @NotNull(message = "O atributo discriminação é obrigatório!")
        String discriminacao) {
}
