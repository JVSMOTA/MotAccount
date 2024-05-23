package com.sapatariasmota.MotAccountWeb.exception;

public class AgendamentoNotExistException extends MotAccountException {
    public AgendamentoNotExistException() {
        super("Agendamento not exist.");
    }
}
