package com.projeto.sge.service;
import com.projeto.sge.dto.PedidoDTO;
import com.projeto.sge.entities.Pedido;
import com.projeto.sge.repositories.PedidoRepository;
import com.projeto.sge.service.exception.DatabaseException;
import com.projeto.sge.service.exception.ResourceNotFountExecption;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class PedidoService {
    @Autowired
    private PedidoRepository repository;

    @Transactional(readOnly = true)
    public List<PedidoDTO> findAll()
    {
        List<Pedido> entity = repository.findAll();
        List<PedidoDTO> dto = new ArrayList<>();
        for(Pedido p: entity)
        {
            dto.add(new PedidoDTO(p));

        }
        return dto;
    }
    @Transactional(readOnly = true)
    public PedidoDTO findById(Long id)
    {
        Optional<Pedido> obj = repository.findById(id);
        Pedido entity = obj.orElseThrow(() -> new ResourceNotFountExecption("Busca não encontrada"));
        return  new PedidoDTO(entity);
    }
    @Transactional
    public PedidoDTO insert(PedidoDTO dto)
    {
        Pedido entity = new Pedido();
        copyEntityDto(entity, dto);
        entity = repository.save(entity);
        return new PedidoDTO(entity);
    }
    @Transactional
    public PedidoDTO update(Long id, PedidoDTO dto)
    {
        try
        {
            Pedido entity = repository.getReferenceById(id);
            copyEntityDto(entity, dto);
            entity = repository.save(entity);
            return new PedidoDTO(entity);
        }
        catch (EntityNotFoundException e)
        {
            throw new ResourceNotFountExecption("Recurso não encontrado");
        }
    }
    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFountExecption("Recurso não encontrado");
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Falha de integridade");
        }
    }
    public void copyEntityDto(Pedido entity, PedidoDTO dto)
    {
        entity.setMoment(dto.getMoment());
        entity.setDescription(dto.getDescription());
        entity.setStatus(dto.getStatus());
    }
}
