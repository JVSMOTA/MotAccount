package com.sapatariasmota.MotAccountWeb.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record UsuarioRecordDto(@NotNull Boolean administrador, @NotBlank String nome, @NotBlank @Email String email, @NotBlank @Size(min = 6, max = 20) String senha) {
}
