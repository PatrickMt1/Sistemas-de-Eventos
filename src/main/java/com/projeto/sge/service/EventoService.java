package com.projeto.sge.service;

import com.projeto.sge.dto.EventoDTO;
import com.projeto.sge.entities.Evento;
import com.projeto.sge.repositories.EventoRepository;
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
public class EventoService
{
    @Autowired
    private EventoRepository repository;

    @Transactional(readOnly = true)
    public List<EventoDTO> findAll()
    {
        List<Evento> entity = repository.findAll();
        List<EventoDTO> dto = new ArrayList<>();

        for(Evento e: entity)
        {
            dto.add(new EventoDTO(e));
        }
        return dto;
    }
    @Transactional(readOnly = true)
    public EventoDTO findById(Long id)
    {
        Optional<Evento> obj = repository.findById(id);
        Evento entity = obj.orElseThrow(() -> new ResourceNotFountExecption("Busca não encontrada!"));
        return new EventoDTO(entity);
    }
    @Transactional
    public EventoDTO insert(EventoDTO dto)
    {
        Evento entity = new Evento();
        copyEntityDto(entity, dto);
        entity = repository.save(entity);
        return new EventoDTO(entity);
    }
    @Transactional
    public EventoDTO update(Long id, EventoDTO dto)
    {
        try
        {
            Evento entity = repository.getReferenceById(id);
            copyEntityDto(entity, dto);
            entity = repository.save(entity);
            return new EventoDTO(entity);
        }
        catch (EntityNotFoundException e)
        {
            throw new ResourceNotFountExecption("Recurso não encontrado");
        }
    }
    public void delete(Long id)
    {
        try
        {
            repository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e)
        {
            throw new ResourceNotFountExecption("Recurso não encontrado");
        }
        catch (DataIntegrityViolationException e)
        {
            throw new DatabaseException("Falha de integridade");
        }
    }
    public void copyEntityDto(Evento entity, EventoDTO dto)
    {
        entity.setNome(dto.getNome());
        entity.setData(dto.getData());
        entity.setHorario(dto.getHorario());
        entity.setDescricao(dto.getDescricao());
        entity.setImagem(dto.getImagem());
    }
}
