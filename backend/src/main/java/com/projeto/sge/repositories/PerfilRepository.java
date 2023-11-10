package com.projeto.sge.repositories;

import com.projeto.sge.entities.ItensPedido;
import com.projeto.sge.entities.ItensPedidoPk;
import com.projeto.sge.entities.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerfilRepository extends JpaRepository<Perfil, Long> {
}
