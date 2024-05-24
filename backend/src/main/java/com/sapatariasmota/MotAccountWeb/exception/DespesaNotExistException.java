package com.sapatariasmota.MotAccountWeb.exception;

public class DespesaNotExistException extends MotAccountException {
    public DespesaNotExistException() {
        super("Despesa not exist.");
    }
}
