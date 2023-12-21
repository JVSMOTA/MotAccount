package com.sapatariasmota.MotAccountWeb.controllers;

import com.sapatariasmota.MotAccountWeb.dtos.ApuradoRecordDto;
import com.sapatariasmota.MotAccountWeb.models.ApuradoModel;
import com.sapatariasmota.MotAccountWeb.services.ApuradoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

}
