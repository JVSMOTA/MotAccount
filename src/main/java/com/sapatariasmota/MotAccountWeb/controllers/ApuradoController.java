package com.sapatariasmota.MotAccountWeb.controllers;

import com.sapatariasmota.MotAccountWeb.dtos.ApuradoRecordDto;
import com.sapatariasmota.MotAccountWeb.models.ApuradoModel;
import com.sapatariasmota.MotAccountWeb.services.ApuradoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class ApuradoController {

    private ApuradoService apuradoService;

    public ApuradoController(ApuradoService apuradoService) {
        this.apuradoService = apuradoService;
    }

    @PostMapping("/lojas/{idLoja}/apurados")
    public ResponseEntity<ApuradoModel> createApurado(@PathVariable(value = "idLoja") UUID idLoja, @Valid @RequestBody ApuradoRecordDto apuradoRecordDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(apuradoService.createApurado(idLoja, apuradoRecordDto));
    }

    @GetMapping("/lojas/{idLoja}/apurados")
    public ResponseEntity<List<ApuradoModel>> getAllApurados(@PathVariable(value = "idLoja") UUID idLoja) {
        return ResponseEntity.status(HttpStatus.OK).body(apuradoService.getAllApurados(idLoja));
    }

}
