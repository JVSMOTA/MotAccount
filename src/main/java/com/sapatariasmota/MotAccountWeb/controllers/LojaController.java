package com.sapatariasmota.MotAccountWeb.controllers;

import com.sapatariasmota.MotAccountWeb.dtos.LojaRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotFoundException;
import com.sapatariasmota.MotAccountWeb.exception.UsuarioNotFoundException;
import com.sapatariasmota.MotAccountWeb.models.LojaModel;
import com.sapatariasmota.MotAccountWeb.repositories.LojaRepository;
import com.sapatariasmota.MotAccountWeb.services.LojaService;
import com.sapatariasmota.MotAccountWeb.services.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/lojas")
public class LojaController {

    private LojaService lojaService;

    public LojaController(LojaService lojaService) {
        this.lojaService = lojaService;
    }

    @PostMapping
    public ResponseEntity<LojaModel> createLoja(@RequestBody @Valid LojaRecordDto lojaRecordDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(lojaService.createLoja(lojaRecordDto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneLoja(@PathVariable(value = "id") UUID id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(lojaService.getLojaById(id));
        } catch (LojaNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<LojaModel>> getAllLojas() {
        return ResponseEntity.status(HttpStatus.OK).body(lojaService.getAllLojas());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateLoja(@PathVariable(value = "id") UUID id, @RequestBody @Valid LojaRecordDto lojaRecordDto) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(lojaService.updateLoja(id, lojaRecordDto));
        } catch (LojaNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLoja(@PathVariable(value = "id") UUID id) {
        try {
            lojaService.deleteLoja(id);
            return ResponseEntity.status(HttpStatus.OK).body("Loja deleted successfully.");
        } catch (LojaNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
