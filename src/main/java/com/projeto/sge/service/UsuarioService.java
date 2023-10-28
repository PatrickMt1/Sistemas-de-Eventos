package com.projeto.sge.service;
import com.projeto.sge.dto.EnderecoDTO;
import com.projeto.sge.dto.UsuarioDTO;
import com.projeto.sge.entities.Endereco;
import com.projeto.sge.entities.Usuario;
import com.projeto.sge.repositories.EnderecoRepository;
import com.projeto.sge.repositories.UsuarioRepository;
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
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private EnderecoRepository enderecoRepository;
    @Transactional(readOnly = true)
    public List<UsuarioDTO> findAll()
    {
        List<Usuario> entity = repository.findAll();
        List<UsuarioDTO> dto = new ArrayList<>();

        for(Usuario u: entity)
        {
            dto.add(new UsuarioDTO(u));
        }
        return dto;
    }
    @Transactional(readOnly = true)
    public UsuarioDTO findById(Long id)
    {
        Optional<Usuario> obj = repository.findById(id);
        Usuario entity = obj.orElseThrow(() -> new ResourceNotFountExecption("Busca não encontrada"));
        return new UsuarioDTO(entity);
    }
    @Transactional
    public  UsuarioDTO insert(UsuarioDTO dto)
    {
        Endereco endereco = new Endereco();
        copyEntityToEndereco(endereco, dto.getEndereco());
        endereco = enderecoRepository.save(endereco);
        Usuario entity = new Usuario();
        copyEntityUsuario(entity, dto);
        entity.setEndereco(endereco);
        entity = repository.save(entity);
        return new UsuarioDTO(entity);

    }
    @Transactional
    public UsuarioDTO update(Long id, UsuarioDTO dto) {
        try {
            Endereco endereco = enderecoRepository.getReferenceById(id);
            copyEntityToEndereco(endereco, dto.getEndereco());
            endereco = enderecoRepository.save(endereco);
            Usuario entity = repository.getReferenceById(id);
            copyEntityUsuario(entity, dto);
            entity.setEndereco(endereco);
            entity = repository.save(entity);
            return new UsuarioDTO(entity);
        } catch (EntityNotFoundException e) {
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
            throw new ResourceNotFountExecption("Recurso não encontrada");
        }
        catch (DataIntegrityViolationException e)
        {
            throw new DatabaseException("Falha de integridade");
        }
    }

    public void copyEntityUsuario(Usuario entity, UsuarioDTO dto)
    {
        entity.setNome(dto.getNome());
        entity.setEmail(dto.getEmail());
        entity.setSexo(dto.getSexo());
        entity.setDataNascimento(dto.getDataNascimento());
        entity.setTelefone(dto.getTelefone());
        entity.setLogin(dto.getLogin());
        entity.setSenha(dto.getSenha());
    }
    public void copyEntityToEndereco(Endereco entity, EnderecoDTO dto)
    {
        entity.setBairro(dto.getBairro());
        entity.setCep(dto.getCep());
        entity.setEstado(dto.getEstado());
        entity.setRua(dto.getRua());
        entity.setNumero(dto.getNumero());
    }
}
