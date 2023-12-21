package com.sapatariasmota.MotAccountWeb.exception;

public class UsuarioNotAuthorizedException extends MotAccountException {
    public UsuarioNotAuthorizedException() {
        super("Usuário not authorized.");
    }
}
