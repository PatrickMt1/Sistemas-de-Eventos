package com.projeto.sge.repositories;

import com.projeto.sge.entities.Endereco;
import com.projeto.sge.entities.ItensPedido;
import com.projeto.sge.entities.ItensPedidoPk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItensPedidoRepository extends JpaRepository<ItensPedido, ItensPedidoPk> {
}
