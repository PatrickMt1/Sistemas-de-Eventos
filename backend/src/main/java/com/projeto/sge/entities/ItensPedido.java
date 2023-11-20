package com.projeto.sge.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_itens_pedido")
public class ItensPedido {
    @EmbeddedId
    private ItensPedidoPk id = new ItensPedidoPk();
    private Integer quantidade;
    private Double preco;

    public ItensPedido() {
    }
    public ItensPedido(Pedido pedido ,Evento evento, Integer quantidade, Double preco) {
        id.setPedido(pedido);
        id.setEvento(evento);
        this.quantidade = quantidade;
        this.preco = preco;
    }
    public Pedido getPedido() {
        return id.getPedido();
    }

    public void setPedido(Pedido pedido) {
        id.setPedido(pedido);
    }
    public Evento getEvento() {
        return id.getEvento();
    }

    public void setEvento(Evento evento) {
        id.setEvento(evento);
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }


}
