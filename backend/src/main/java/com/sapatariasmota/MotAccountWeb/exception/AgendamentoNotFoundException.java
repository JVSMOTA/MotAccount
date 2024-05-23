package com.sapatariasmota.MotAccountWeb.exception;

public class AgendamentoNotFoundException extends MotAccountException {
    public AgendamentoNotFoundException() {
        super("Agendamento not found.");
    }
}
