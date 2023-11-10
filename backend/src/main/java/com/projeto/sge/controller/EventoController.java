package com.projeto.sge.controller;
import com.projeto.sge.dto.EventoDTO;
import com.projeto.sge.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/eventos")
public class EventoController {

    @Autowired
    private EventoService service;

    @GetMapping
    public ResponseEntity<List<EventoDTO>> findAll(){
        List<EventoDTO> dto = service.findAll();
        return ResponseEntity.ok().body(dto);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<EventoDTO> findById(@PathVariable Long id)
    {
        EventoDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }
    @PostMapping
    public ResponseEntity<EventoDTO> insert(@RequestBody EventoDTO dto)
    {
        dto = service.insert(dto);
        return  ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<EventoDTO> update(@PathVariable Long id,@RequestBody EventoDTO dto)
    {
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
