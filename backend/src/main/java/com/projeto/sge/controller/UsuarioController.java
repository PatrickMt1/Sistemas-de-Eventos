package com.projeto.sge.controller;
import com.projeto.sge.dto.UsuarioDTO;
import com.projeto.sge.service.UsuarioService;
import com.projeto.sge.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService service;
    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> findAll()
    {
        List<UsuarioDTO> dto = service.findAll();
        return ResponseEntity.ok().body(dto);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<UsuarioDTO> findById(@PathVariable Long id)
    {
        UsuarioDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }
    @PostMapping
    public ResponseEntity<UsuarioDTO> insert(@RequestBody UsuarioDTO dto)
    {
        dto = service.insert(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody UsuarioDTO dto )
    {
        UsuarioDTO usuario = service.findById(id);
        if(usuario == null)
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
        }
        if(id != usuario.getId())
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuário não tem permissão");
        }
            Utils.copyNonNullProperties(dto, usuario);
            dto = service.update(id, dto);
            return  ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id)
    {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
