package com.projeto.sge.controller;
import com.projeto.sge.dto.PedidoDTO;
import com.projeto.sge.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/pedidos")
public class PedidoController {
    @Autowired
    private PedidoService service;

    @GetMapping
    public ResponseEntity<List<PedidoDTO>> findALl()
    {
        List<PedidoDTO> dto = service.findAll();
        return ResponseEntity.ok().body(dto);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<PedidoDTO> findById(@PathVariable Long id)
    {
        PedidoDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }
    @PostMapping
    public ResponseEntity<PedidoDTO> insert(@RequestBody PedidoDTO dto)
    {
        dto = service.insert(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<PedidoDTO> update(@PathVariable Long id, @RequestBody PedidoDTO dto)
    {
        dto = service.update(id,dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id)
    {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
