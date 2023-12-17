package com.sapatariasmota.MotAccountWeb.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record LojaRecordDto(@NotBlank String nome, @NotBlank String tipo, @NotBlank String endereco) {
}
