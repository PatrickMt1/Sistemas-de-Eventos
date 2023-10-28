package com.projeto.sge.dto;

import com.projeto.sge.entities.Evento;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

public class EventoDTO implements Serializable {
    private Long id;
    private String nome;
    private LocalDate data;
    private LocalTime horario;
    private String descricao;
    private String imagem;

    public EventoDTO() {
    }
    public EventoDTO(Long id, String nome, LocalDate data, LocalTime horario, String descricao, String imagem) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.horario = horario;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    public EventoDTO(Evento entity) {
        id = entity.getId();
        nome = entity.getNome();
        data = entity.getData();
        horario = entity.getHorario();
        descricao = entity.getDescricao();
        imagem = entity.getImagem();
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public LocalTime getHorario() {
        return horario;
    }

    public void setHorario(LocalTime horario) {
        this.horario = horario;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }


}
