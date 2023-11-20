package com.projeto.sge.dto;

import com.projeto.sge.entities.Usuario;

import java.util.Objects;

public class UsuarioEmailDTO {

    private Long id;
    private String email;
    private String password;
    public UsuarioEmailDTO()
    {

    }
    public UsuarioEmailDTO(Long id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
    public UsuarioEmailDTO(Usuario entity) {
        this.id= entity.getId();
        this.email = entity.getEmail();
        this.password = entity.getPassword();
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
