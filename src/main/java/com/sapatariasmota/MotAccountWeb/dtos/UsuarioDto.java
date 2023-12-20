package com.sapatariasmota.MotAccountWeb.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioDto {

    private String email;
    private String senha;

    public UsuarioDto(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }
}
