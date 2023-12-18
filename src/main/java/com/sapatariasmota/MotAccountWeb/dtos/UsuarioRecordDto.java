package com.sapatariasmota.MotAccountWeb.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record UsuarioRecordDto(@NotNull Boolean isAdm, @NotBlank String nome, @NotBlank String email, @NotBlank String senha) {
}
