package com.sapatariasmota.MotAccountWeb.controllers;

import com.sapatariasmota.MotAccountWeb.dtos.DespesaRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.DespesaNotExistException;
import com.sapatariasmota.MotAccountWeb.exception.DespesaNotFoundException;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotExistException;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotFoundException;
import com.sapatariasmota.MotAccountWeb.services.DespesaService;
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
public class DespesaController {

    private DespesaService despesaService;

    public DespesaController(DespesaService despesaService) {
        this.despesaService = despesaService;
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @PostMapping("/lojas/{idLoja}/despesas")
    public ResponseEntity<?> createDespesa(@PathVariable(value = "idLoja") UUID idLoja, @Valid @RequestBody DespesaRecordDto despesaRecordDto) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(despesaService.createDespesa(idLoja, despesaRecordDto));
        } catch (LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @GetMapping("/lojas/{idLoja}/despesas")
    public ResponseEntity<?> getAllDespesas(@PathVariable(value = "idLoja") UUID idLoja) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(despesaService.getAllDespesas(idLoja));
        } catch (DespesaNotFoundException | LojaNotFoundException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @GetMapping("/lojas/{idLoja}/despesas/{idDespesa}")
    public ResponseEntity<Object> getOneDespesa(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idDespesa") UUID idDespesa) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(despesaService.getDespesaById(idLoja, idDespesa));
        } catch (DespesaNotFoundException | DespesaNotExistException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @PutMapping("/lojas/{idLoja}/despesas/{idDespesa}")
    public ResponseEntity<Object> updateLoja(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idDespesa") UUID idDespesa, @Valid @RequestBody DespesaRecordDto despesaRecordDto) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(despesaService.updateDespesa(idLoja, idDespesa, despesaRecordDto));
        } catch (DespesaNotFoundException | DespesaNotExistException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @DeleteMapping("/lojas/{idLoja}/despesas/{idDespesa}")
    public ResponseEntity<?> deleteLoja(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idDespesa") UUID idDespesa) {
        try {
            despesaService.deleteDespesa(idLoja, idDespesa);
            return ResponseEntity.status(HttpStatus.OK).body("Despesa deleted successfully.");
        } catch (DespesaNotFoundException | DespesaNotExistException | LojaNotExistException e) {
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
