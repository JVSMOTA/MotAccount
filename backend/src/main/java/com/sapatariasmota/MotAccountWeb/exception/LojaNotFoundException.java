package com.sapatariasmota.MotAccountWeb.exception;

public class LojaNotFoundException extends MotAccountException {
    public LojaNotFoundException() {
        super("Loja not found.");
    }
}
