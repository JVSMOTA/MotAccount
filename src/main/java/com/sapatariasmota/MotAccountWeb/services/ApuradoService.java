package com.sapatariasmota.MotAccountWeb.services;

import com.sapatariasmota.MotAccountWeb.dtos.ApuradoRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotExistException;
import com.sapatariasmota.MotAccountWeb.models.ApuradoModel;
import com.sapatariasmota.MotAccountWeb.models.LojaModel;
import com.sapatariasmota.MotAccountWeb.repositories.ApuradoRepository;
import com.sapatariasmota.MotAccountWeb.repositories.LojaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ApuradoService {

    @Autowired
    private ApuradoRepository apuradoRepository;
    @Autowired
    private LojaRepository lojaRepository;

    public ApuradoService(ApuradoRepository apuradoRepository) {
        this.apuradoRepository = apuradoRepository;
    }

    public ApuradoModel createApurado(UUID idLoja, ApuradoRecordDto apuradoRecordDto) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        ApuradoModel apurado = new ApuradoModel();
        BeanUtils.copyProperties(apuradoRecordDto, apurado);
        apurado.setLoja(loja);
        apuradoRepository.save(apurado);
        return apurado;
    }

}
