package com.sapatariasmota.MotAccountWeb.services;

import com.sapatariasmota.MotAccountWeb.dtos.DespesaRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.DespesaNotExistException;
import com.sapatariasmota.MotAccountWeb.exception.DespesaNotFoundException;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotExistException;
import com.sapatariasmota.MotAccountWeb.models.DespesaModel;
import com.sapatariasmota.MotAccountWeb.models.LojaModel;
import com.sapatariasmota.MotAccountWeb.repositories.DespesaRepository;
import com.sapatariasmota.MotAccountWeb.repositories.LojaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class DespesaService {

    @Autowired
    private DespesaRepository despesaRepository;
    @Autowired
    private LojaRepository lojaRepository;

    public DespesaService(DespesaRepository despesaRepository) {
        this.despesaRepository = despesaRepository;
    }

    public DespesaModel createDespesa(UUID idLoja, DespesaRecordDto despesaRecordDto) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        DespesaModel despesa = new DespesaModel();
        BeanUtils.copyProperties(despesaRecordDto, despesa);
        despesa.setLoja(loja);
        despesaRepository.save(despesa);

        return despesa;
    }

    public List<DespesaModel> getAllDespesas(UUID idLoja) {
        return lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new).getDespesas();
    }

    public DespesaModel getDespesaById(UUID idLoja, UUID idDespesa) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        DespesaModel despesa = despesaRepository.findById(idDespesa).orElseThrow(DespesaNotExistException::new);

        if (!despesa.getLoja().equals(loja)) throw new DespesaNotFoundException();

        return despesa;
    }

    public DespesaModel updateDespesa(UUID idLoja, UUID idDespesa, DespesaRecordDto despesaRecordDto) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        DespesaModel despesa = despesaRepository.findById(idDespesa).orElseThrow(DespesaNotExistException::new);

        if (!despesa.getLoja().equals(loja)) throw new DespesaNotFoundException();

        BeanUtils.copyProperties(despesaRecordDto, despesa);
        despesaRepository.save(despesa);

        return despesa;
    }

    public void deleteDespesa(UUID idLoja, UUID idDespesa) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        DespesaModel despesa = despesaRepository.findById(idDespesa).orElseThrow(DespesaNotExistException::new);

        if (!despesa.getLoja().equals(loja)) throw new DespesaNotFoundException();

        despesaRepository.delete(despesa);
    }
}
