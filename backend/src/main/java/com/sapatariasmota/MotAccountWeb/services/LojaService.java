package com.sapatariasmota.MotAccountWeb.services;

import com.sapatariasmota.MotAccountWeb.controllers.LojaController;
import com.sapatariasmota.MotAccountWeb.dtos.LojaRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotFoundException;
import com.sapatariasmota.MotAccountWeb.models.LojaModel;
import com.sapatariasmota.MotAccountWeb.repositories.LojaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Service
public class LojaService {

    @Autowired
    private LojaRepository lojaRepository;

    public LojaService(LojaRepository lojaRepository) {
        this.lojaRepository = lojaRepository;
    }

    public LojaModel createLoja(LojaRecordDto lojaRecordDto) {
        LojaModel loja = new LojaModel();
        BeanUtils.copyProperties(lojaRecordDto, loja);
        lojaRepository.save(loja);
        return loja;
    }

    public List<LojaModel> getAllLojas() {
        List<LojaModel> lojaList = lojaRepository.findAll();
        if(!lojaList.isEmpty()){
            for (LojaModel loja : lojaList) {
                UUID id = loja.getIdLoja();
                loja.add(linkTo(methodOn(LojaController.class).getOneLoja(id)).withSelfRel());
            }
        }
        return lojaList;
    }

    public LojaModel getLojaById(UUID id) {
        LojaModel loja = lojaRepository.findById(id).orElseThrow(LojaNotFoundException::new);
        loja.add(linkTo(methodOn(LojaController.class).getAllLojas()).withSelfRel());
        return loja;
    }

    public LojaModel updateLoja(UUID id, LojaRecordDto lojaRecordDto) {
        LojaModel loja = lojaRepository.findById(id).orElseThrow(LojaNotFoundException::new);
        BeanUtils.copyProperties(lojaRecordDto, loja);
        lojaRepository.save(loja);
        return loja;
    }

    public void deleteLoja(UUID id) {
        LojaModel loja = lojaRepository.findById(id).orElseThrow(LojaNotFoundException::new);
        lojaRepository.delete(loja);
    }
}
