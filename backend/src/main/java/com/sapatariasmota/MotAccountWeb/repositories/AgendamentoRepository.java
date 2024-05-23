package com.sapatariasmota.MotAccountWeb.repositories;

import com.sapatariasmota.MotAccountWeb.models.AgendamentoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AgendamentoRepository extends JpaRepository<AgendamentoModel, UUID> {
}
