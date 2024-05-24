package com.sapatariasmota.MotAccountWeb.repositories;

import com.sapatariasmota.MotAccountWeb.models.DespesaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface DespesaRepository extends JpaRepository<DespesaModel, UUID> {
}
