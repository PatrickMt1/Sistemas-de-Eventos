package com.projeto.sge.entities;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tb_pedido")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate momento;
    private String descricao;
    private String status;

    public Pedido(Long id, LocalDate momento, String descricao, String status) {
        this.id = id;
        this.momento = momento;
        this.descricao = descricao;
        this.status = status;
    }
    @ManyToMany
    @JoinTable(name = "tb_pedido_usuario",
    joinColumns = @JoinColumn(name = "pedido_id"),
    inverseJoinColumns = @JoinColumn(name = "usuario_id"))
    private List<Usuario> usuario = new ArrayList<>();
    @ManyToMany
    @JoinTable(name = "tb_pedido_pagamento",
    joinColumns = @JoinColumn(name = "pedido_id"),
    inverseJoinColumns = @JoinColumn(name = "pagamento_id"))
    private List<Pagamento> pagamento = new ArrayList<>();

    public Pedido() {
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

    public void setMomento(LocalDate dateTime) {
        this.momento = dateTime;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pedido pedido = (Pedido) o;
        return Objects.equals(id, pedido.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
