package com.projeto.sge.dto;

import com.projeto.sge.entities.Evento;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

public class EventoDTO implements Serializable {
    private Long id;
    private String name;
    private LocalDate date;
    private LocalTime time;
    private Float price;
    private String image;

    public EventoDTO() {
    }
    public EventoDTO(Long id, String name, LocalDate date, LocalTime time, Float price, String image) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.price = price;
        this.image = image;
    }

    public EventoDTO(Evento entity) {
        id = entity.getId();
        name = entity.getName();
        date = entity.getDate();
        time = entity.getTime();
        price = entity.getPrice();
        image = entity.getImage();
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


}
