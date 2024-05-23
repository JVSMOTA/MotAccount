package com.sapatariasmota.MotAccountWeb.services;

import com.sapatariasmota.MotAccountWeb.dtos.AgendamentoRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.AgendamentoNotExistException;
import com.sapatariasmota.MotAccountWeb.exception.AgendamentoNotFoundException;
import com.sapatariasmota.MotAccountWeb.exception.LojaNotExistException;
import com.sapatariasmota.MotAccountWeb.models.AgendamentoModel;
import com.sapatariasmota.MotAccountWeb.models.LojaModel;
import com.sapatariasmota.MotAccountWeb.repositories.AgendamentoRepository;
import com.sapatariasmota.MotAccountWeb.repositories.LojaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AgendamentoService {

    @Autowired
    private AgendamentoRepository agendamentoRepository;
    @Autowired
    private LojaRepository lojaRepository;

    public AgendamentoService(AgendamentoRepository agendamentoRepository) {
        this.agendamentoRepository = agendamentoRepository;
    }

    public AgendamentoModel createAgendamento(UUID idLoja, AgendamentoRecordDto agendamentoRecordDto) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        AgendamentoModel agendamento = new AgendamentoModel();
        BeanUtils.copyProperties(agendamentoRecordDto, agendamento);
        agendamento.setLoja(loja);
        agendamentoRepository.save(agendamento);

        return agendamento;
    }

    public List<AgendamentoModel> getAllAgendamentos(UUID idLoja) {
        return lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new).getAgendamentos();
    }

    public AgendamentoModel getAgendamentoById(UUID idLoja, UUID idAgendamento) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        AgendamentoModel agendamento = agendamentoRepository.findById(idAgendamento).orElseThrow(AgendamentoNotExistException::new);

        if (!agendamento.getLoja().equals(loja)) throw new AgendamentoNotFoundException();

        return agendamento;
    }

    public AgendamentoModel updateAgendamento(UUID idLoja, UUID idAgendamento, AgendamentoRecordDto agendamentoRecordDto) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        AgendamentoModel agendamento = agendamentoRepository.findById(idAgendamento).orElseThrow(AgendamentoNotExistException::new);

        if (!agendamento.getLoja().equals(loja)) throw new AgendamentoNotFoundException();

        BeanUtils.copyProperties(agendamentoRecordDto, agendamento);
        agendamentoRepository.save(agendamento);

        return agendamento;
    }

    public void deleteAgendamento(UUID idLoja, UUID idAgendamento) {
        LojaModel loja = lojaRepository.findById(idLoja).orElseThrow(LojaNotExistException::new);
        AgendamentoModel agendamento = agendamentoRepository.findById(idAgendamento).orElseThrow(AgendamentoNotExistException::new);

        if (!agendamento.getLoja().equals(loja)) throw new AgendamentoNotFoundException();

        agendamentoRepository.delete(agendamento);
    }
}
