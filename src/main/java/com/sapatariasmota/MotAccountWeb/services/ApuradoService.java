package com.sapatariasmota.MotAccountWeb.services;

import com.sapatariasmota.MotAccountWeb.dtos.ApuradoRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.ApuradoNotExistException;
import com.sapatariasmota.MotAccountWeb.exception.ApuradoNotFoundException;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotExistException;
import com.sapatariasmota.MotAccountWeb.models.ApuradoModel;
import com.sapatariasmota.MotAccountWeb.models.LojaModel;
import com.sapatariasmota.MotAccountWeb.repositories.ApuradoRepository;
import com.sapatariasmota.MotAccountWeb.repositories.LojaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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

    public List<ApuradoModel> getAllApurados(UUID idLoja) {
        return lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new).getApurados();
    }

    public ApuradoModel getApuradoById(UUID idLoja, UUID idApurado) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        ApuradoModel apurado = apuradoRepository.findById(idApurado).orElseThrow(ApuradoNotExistException::new);

        if (!apurado.getLoja().equals(loja)) throw new ApuradoNotFoundException();

        return apurado;
    }

    public ApuradoModel updateApurado(UUID idLoja, UUID idApurado, ApuradoRecordDto apuradoRecordDto) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        ApuradoModel apurado = apuradoRepository.findById(idApurado).orElseThrow(ApuradoNotFoundException::new);
        if (apurado.getLoja().equals(loja)) BeanUtils.copyProperties(apuradoRecordDto, apurado);
        apuradoRepository.save(apurado);
        return apurado;
    }


}
