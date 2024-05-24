package com.sapatariasmota.MotAccountWeb.exception;

public class DespesaNotFoundException extends MotAccountException {
    public DespesaNotFoundException() {
        super("Despesa not found.");
    }
}
