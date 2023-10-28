package com.projeto.sge.dto;
import com.projeto.sge.entities.Pedido;
import java.io.Serializable;
import java.time.LocalDate;

public class PedidoDTO implements Serializable {
    private Long id;
    private LocalDate momento;
    private String descricao;
    private String status;
    public PedidoDTO() {
    }

    public PedidoDTO(Long id, LocalDate momento, String descricao, String status) {
        this.id = id;
        this.momento = momento;
        this.descricao = descricao;
        this.status = status;
    }
    public PedidoDTO(Pedido entity)
    {
        id = entity.getId();
        momento = entity.getMomento();
        descricao = entity.getDescricao();
        status = entity.getStatus();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getMomento() {
        return momento;
    }

    public void setMomento(LocalDate momento) {
        this.momento = momento;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}


