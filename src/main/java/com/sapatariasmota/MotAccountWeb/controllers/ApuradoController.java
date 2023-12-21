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
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class ApuradoController {

    private ApuradoService apuradoService;

    public ApuradoController(ApuradoService apuradoService) {
        this.apuradoService = apuradoService;
    }

    @PostMapping("/lojas/{idLoja}/apurados")
    public ResponseEntity<?> createApurado(@PathVariable(value = "idLoja") UUID idLoja, @Valid @RequestBody ApuradoRecordDto apuradoRecordDto) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(apuradoService.createApurado(idLoja, apuradoRecordDto));
        } catch (LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/lojas/{idLoja}/apurados")
    public ResponseEntity<?> getAllApurados(@PathVariable(value = "idLoja") UUID idLoja) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(apuradoService.getAllApurados(idLoja));
        } catch (ApuradoNotFoundException | LojaNotFoundException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/lojas/{idLoja}/apurados/{idApurado}")
    public ResponseEntity<Object> getOneApurado(@PathVariable(value = "idLoja") UUID idLoja, @PathVariable(value = "idApurado") UUID idApurado) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(apuradoService.getApuradoById(idLoja, idApurado));
        } catch (ApuradoNotFoundException | ApuradoNotExistException | LojaNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
