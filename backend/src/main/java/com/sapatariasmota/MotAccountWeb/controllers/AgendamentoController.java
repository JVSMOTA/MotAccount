package com.sapatariasmota.MotAccountWeb.controllers;

import com.sapatariasmota.MotAccountWeb.dtos.AgendamentoRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.AgendamentoNotExistException;
import com.sapatariasmota.MotAccountWeb.exception.AgendamentoNotFoundException;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotExistException;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotFoundException;
import com.sapatariasmota.MotAccountWeb.services.AgendamentoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
public class AgendamentoController {

    private AgendamentoService agendamentoService;

    public AgendamentoController(AgendamentoService agendamentoService) {
        this.agendamentoService = agendamentoService;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/lojas/{idLoja}/agendamentos")
    public ResponseEntity<?> createAgendamento(@PathVariable(value = "idLoja") UUID idLoja, @Valid @RequestBody AgendamentoRecordDto agendamentoRecordDto) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(agendamentoService.createAgendamento(idLoja, agendamentoRecordDto));
        } catch (LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/lojas/{idLoja}/agendamentos")
    public ResponseEntity<?> getAllAgendamentos(@PathVariable(value = "idLoja") UUID idLoja) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(agendamentoService.getAllAgendamentos(idLoja));
        } catch (AgendamentoNotFoundException | LojaNotFoundException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/lojas/{idLoja}/agendamentos/{idAgendamento}")
    public ResponseEntity<Object> getOneAgendamento(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idAgendamento") UUID idAgendamento) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(agendamentoService.getAgendamentoById(idLoja, idAgendamento));
        } catch (AgendamentoNotFoundException | AgendamentoNotExistException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/lojas/{idLoja}/agendamentos/{idAgendamento}")
    public ResponseEntity<Object> updateLoja(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idAgendamento") UUID idAgendamento, @Valid @RequestBody AgendamentoRecordDto agendamentoRecordDto) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(agendamentoService.updateAgendamento(idLoja, idAgendamento, agendamentoRecordDto));
        } catch (AgendamentoNotFoundException | AgendamentoNotExistException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/lojas/{idLoja}/agendamentos/{idAgendamento}")
    public ResponseEntity<?> deleteLoja(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idAgendamento") UUID idAgendamento) {
        try {
            agendamentoService.deleteAgendamento(idLoja, idAgendamento);
            return ResponseEntity.status(HttpStatus.OK).body("Agendamento deleted successfully.");
        } catch (AgendamentoNotFoundException | AgendamentoNotExistException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationException(MethodArgumentNotValidException e) {
        Map<String, String> errors = new HashMap<>();

        e.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
