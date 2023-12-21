package com.sapatariasmota.MotAccountWeb.exception;

public class LojaNotExistException extends MotAccountException {
    public LojaNotExistException() {
        super("Loja not exist.");
    }
}
