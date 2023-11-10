package com.projeto.sge.dto;
import com.projeto.sge.entities.Pedido;
import java.io.Serializable;
import java.time.LocalDate;

public class PedidoDTO implements Serializable {
    private Long id;
    private LocalDate moment;
    private String description;
    private String status;
    public PedidoDTO() {
    }

    public PedidoDTO(Long id, LocalDate moment, String description, String status) {
        this.id = id;
        this.moment = moment;
        this.description = description;
        this.status = status;
    }
    public PedidoDTO(Pedido entity)
    {
        id = entity.getId();
        moment = entity.getMoment();
        description = entity.getDescription();
        status = entity.getStatus();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getMoment() {
        return moment;
    }

    public void setMoment(LocalDate moment) {
        this.moment = moment;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}


