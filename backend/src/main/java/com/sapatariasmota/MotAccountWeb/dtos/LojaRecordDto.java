package com.sapatariasmota.MotAccountWeb.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record LojaRecordDto(
        @NotBlank(message = "O atributo nome é obrigatório!")
        String nome,
        @NotBlank(message = "O atributo tipo é obrigatório!")
        String tipo,
        @NotBlank(message = "O atributo endereço é obrigatório!")
        String endereco) {
}
