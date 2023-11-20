package com.projeto.sge.service;
import com.projeto.sge.dto.EnderecoDTO;
import com.projeto.sge.dto.UsuarioDTO;
import com.projeto.sge.dto.UsuarioEmailDTO;
import com.projeto.sge.dto.UsuarioInsertDTO;
import com.projeto.sge.entities.Endereco;
import com.projeto.sge.entities.Usuario;
import com.projeto.sge.repositories.EnderecoRepository;
import com.projeto.sge.repositories.UsuarioRepository;
import com.projeto.sge.service.exception.DatabaseException;
import com.projeto.sge.service.exception.ResourceNotFountExecption;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements UserDetailsService {
    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private EnderecoRepository enderecoRepository;
    @Autowired
    private PasswordEncoder encoder;
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
    protected Usuario authenticated()
    {
        try
        {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            return repository.findByEmail(username);
        }
        catch (Exception e)
        {
            throw new UsernameNotFoundException("Usuário inválido");
        }
    }
    @Transactional(readOnly = true)
    public UsuarioDTO findUser()
    {
        Usuario entity = authenticated();
        return new UsuarioDTO(entity);
    }
    @Transactional(readOnly = true)
    public UsuarioDTO findById(Long id)
    {
        Optional<Usuario> obj = repository.findById(id);
        Usuario entity = obj.orElseThrow(() -> new ResourceNotFountExecption("Busca não encontrada"));
        return new UsuarioDTO(entity);
    }
    @Transactional
    public UsuarioInsertDTO insert(UsuarioInsertDTO dto)
    {
        Endereco endereco = new Endereco();
        copyEntityToEndereco(endereco, dto.getEndereco());
        endereco = enderecoRepository.save(endereco);
        Usuario entity = new Usuario();
        copyEntityUsuario(entity, dto);
        entity.setEndereco(endereco);
        entity.setPassword(encoder.encode(dto.getPassword()));
        entity = repository.save(entity);
        return new UsuarioInsertDTO(entity);

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
        entity.setName(dto.getName());
        entity.setCpf(dto.getCpf());
        entity.setEmail(dto.getEmail());
        entity.setGender(dto.getGender());
        entity.setDateNasc(dto.getDateNasc());
        entity.setPhone(dto.getPhone());
    }
    public void copyEntityToEndereco(Endereco entity, EnderecoDTO dto)
    {
       entity.setCity(dto.getCity());
        entity.setPostalCode(dto.getPostalCode());
        entity.setState(dto.getState());
        entity.setStreet(dto.getStreet());
        entity.setNumber(dto.getNumber());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = repository.findByEmail(username);
        if(usuario == null)
        {
            throw new UsernameNotFoundException("usuário não encontrado");
        }
        return usuario;
    }
}
