package com.sapatariasmota.MotAccountWeb.controllers;

import com.sapatariasmota.MotAccountWeb.dtos.LojaRecordDto;
import com.sapatariasmota.MotAccountWeb.models.LojaModel;
import com.sapatariasmota.MotAccountWeb.repositories.LojaRepository;
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
public class LojaController {

    @Autowired
    LojaRepository lojaRepository;

    @PostMapping("/lojas")
    public ResponseEntity<LojaModel> saveLoja(@RequestBody @Valid LojaRecordDto lojaRecordDto) {
        var lojaModel = new LojaModel();
        BeanUtils.copyProperties(lojaRecordDto, lojaModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(lojaRepository.save(lojaModel));
    }

    @GetMapping("/lojas")
    public ResponseEntity<List<LojaModel>> getAllLojas() {
        List<LojaModel> lojaList = lojaRepository.findAll();
        if(!lojaList.isEmpty()){
            for (LojaModel loja : lojaList) {
                UUID id = loja.getIdLoja();
                loja.add(linkTo(methodOn(LojaController.class).getOneLoja(id)).withSelfRel());
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(lojaList);
    }

    @GetMapping("/lojas/{id}")
    public ResponseEntity<Object> getOneLoja(@PathVariable(value = "id") UUID id) {
        Optional<LojaModel> lojaO = lojaRepository.findById(id);
        if(lojaO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Loja not found.");
        }
        lojaO.get().add(linkTo(methodOn(LojaController.class).getAllLojas()).withSelfRel());
        return ResponseEntity.status(HttpStatus.OK).body(lojaO.get());
    }

    @PutMapping("/lojas/{id}")
    public ResponseEntity<Object> updateLoja(@PathVariable(value = "id") UUID id,
                                             @RequestBody @Valid LojaRecordDto lojaRecordDto) {
        Optional<LojaModel> lojaO = lojaRepository.findById(id);
        if(lojaO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Loja not found.");
        }
        var lojaModel = lojaO.get();
        BeanUtils.copyProperties(lojaRecordDto, lojaModel);
        return ResponseEntity.status(HttpStatus.OK).body(lojaRepository.save(lojaModel));
    }

    @DeleteMapping("/lojas/{id}")
    public ResponseEntity<Object> deleteLoja(@PathVariable(value = "id") UUID id) {
        Optional<LojaModel> lojaO = lojaRepository.findById(id);
        if(lojaO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Loja not found.");
        }
        lojaRepository.delete(lojaO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Loja deleted successfully.");
    }
}
