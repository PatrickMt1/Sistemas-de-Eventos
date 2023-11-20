package com.projeto.sge.entities;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ItensPedidoPk implements Serializable {
    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;
    @ManyToOne
    @JoinColumn(name = "evento_id")
    private Evento evento;

    public ItensPedidoPk() {
    }
    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    public Evento getEvento() {
        return evento;
    }

    public void setEvento(Evento evento) {
        this.evento = evento;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItensPedidoPk that = (ItensPedidoPk) o;
        return Objects.equals(pedido, that.pedido) && Objects.equals(evento, that.evento);
    }

    @Override
    public int hashCode() {
        return Objects.hash(pedido, evento);
    }
}
