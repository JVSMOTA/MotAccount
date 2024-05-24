package com.sapatariasmota.MotAccountWeb.controllers;

import com.sapatariasmota.MotAccountWeb.dtos.ApuradoRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.ApuradoNotExistException;
import com.sapatariasmota.MotAccountWeb.exception.ApuradoNotFoundException;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotExistException;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotFoundException;
import com.sapatariasmota.MotAccountWeb.services.ApuradoService;
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
public class ApuradoController {

    private ApuradoService apuradoService;

    public ApuradoController(ApuradoService apuradoService) {
        this.apuradoService = apuradoService;
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @PostMapping("/lojas/{idLoja}/apurados")
    public ResponseEntity<?> createApurado(@PathVariable(value = "idLoja") UUID idLoja, @Valid @RequestBody ApuradoRecordDto apuradoRecordDto) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(apuradoService.createApurado(idLoja, apuradoRecordDto));
        } catch (LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @GetMapping("/lojas/{idLoja}/apurados")
    public ResponseEntity<?> getAllApurados(@PathVariable(value = "idLoja") UUID idLoja) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(apuradoService.getAllApurados(idLoja));
        } catch (ApuradoNotFoundException | LojaNotFoundException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @GetMapping("/lojas/{idLoja}/apurados/{idApurado}")
    public ResponseEntity<Object> getOneApurado(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idApurado") UUID idApurado) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(apuradoService.getApuradoById(idLoja, idApurado));
        } catch (ApuradoNotFoundException | ApuradoNotExistException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @PutMapping("/lojas/{idLoja}/apurados/{idApurado}")
    public ResponseEntity<Object> updateLoja(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idApurado") UUID idApurado, @Valid @RequestBody ApuradoRecordDto apuradoRecordDto) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(apuradoService.updateApurado(idLoja, idApurado, apuradoRecordDto));
        } catch (ApuradoNotFoundException | ApuradoNotExistException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://192.168.5.160:5173")
    @DeleteMapping("/lojas/{idLoja}/apurados/{idApurado}")
    public ResponseEntity<?> deleteLoja(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idApurado") UUID idApurado) {
        try {
            apuradoService.deleteApurado(idLoja, idApurado);
            return ResponseEntity.status(HttpStatus.OK).body("Apurado deleted successfully.");
        } catch (ApuradoNotFoundException | ApuradoNotExistException | LojaNotExistException e) {
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
