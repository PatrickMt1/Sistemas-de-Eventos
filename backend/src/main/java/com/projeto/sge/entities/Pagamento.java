package com.projeto.sge.entities;

import javax.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tb_pagamento")
public class Pagamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String formaPagamento;
    private LocalDate dataPagamento;
    private String descricaoPagamento;
    private Double valorPagamento;

    @ManyToMany(mappedBy = "pagamento")
    private List<Pedido> pedidos = new ArrayList<>();

    public Pagamento(Long id, String formaPagamento, LocalDate dataPagamento, String descricaoPagamento, Double valorPagamento) {
        this.id = id;
        this.formaPagamento = formaPagamento;
        this.dataPagamento = dataPagamento;
        this.descricaoPagamento = descricaoPagamento;
        this.valorPagamento = valorPagamento;
    }

    public Pagamento() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(String formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public LocalDate getDataPagamento() {
        return dataPagamento;
    }

    public void setDataPagamento(LocalDate dataPagamento) {
        this.dataPagamento = dataPagamento;
    }

    public String getDescricaoPagamento() {
        return descricaoPagamento;
    }

    public void setDescricaoPagamento(String descricaoPagamento) {
        this.descricaoPagamento = descricaoPagamento;
    }

    public Double getValorPagamento() {
        return valorPagamento;
    }

    public void setValorPagamento(Double valorPagamento) {
        this.valorPagamento = valorPagamento;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pagamento pagamento = (Pagamento) o;
        return Objects.equals(id, pagamento.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
