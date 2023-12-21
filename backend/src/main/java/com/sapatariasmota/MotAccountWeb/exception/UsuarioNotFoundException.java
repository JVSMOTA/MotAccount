package com.sapatariasmota.MotAccountWeb.exception;

public class UsuarioNotFoundException extends MotAccountException {
    public UsuarioNotFoundException() {
        super("Usuário not found.");
    }
}
