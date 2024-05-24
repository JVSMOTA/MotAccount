package com.sapatariasmota.MotAccountWeb.controllers;

import com.sapatariasmota.MotAccountWeb.dtos.LojaRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotFoundException;
import com.sapatariasmota.MotAccountWeb.models.LojaModel;
import com.sapatariasmota.MotAccountWeb.services.LojaService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/lojas")
public class LojaController {

    private LojaService lojaService;

    public LojaController(LojaService lojaService) {
        this.lojaService = lojaService;
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @PostMapping
    public ResponseEntity<LojaModel> createLoja(@Valid @RequestBody LojaRecordDto lojaRecordDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(lojaService.createLoja(lojaRecordDto));
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneLoja(@PathVariable(value = "id") UUID id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(lojaService.getLojaById(id));
        } catch (LojaNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @GetMapping
    public ResponseEntity<List<LojaModel>> getAllLojas() {
        return ResponseEntity.status(HttpStatus.OK).body(lojaService.getAllLojas());
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateLoja(@PathVariable(value = "id") UUID id, @Valid @RequestBody LojaRecordDto lojaRecordDto) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(lojaService.updateLoja(id, lojaRecordDto));
        } catch (LojaNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLoja(@PathVariable(value = "id") UUID id) {
        try {
            lojaService.deleteLoja(id);
            return ResponseEntity.status(HttpStatus.OK).body("Loja deleted successfully.");
        } catch (LojaNotFoundException e) {
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
