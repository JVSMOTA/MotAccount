package com.sapatariasmota.MotAccountWeb.exception;

public class MotAccountException extends RuntimeException {
    public MotAccountException() {
        super("Erro inesperado no MotAccount!");
    }

    public MotAccountException(String message) {
        super(message);
    }
}
