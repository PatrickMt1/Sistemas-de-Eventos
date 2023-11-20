package com.projeto.sge.dto;
import com.projeto.sge.entities.Usuario;
import org.springframework.security.core.GrantedAuthority;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDTO {
    private Long id;
    private String name;
    private String cpf;
    private String email;
    private Character gender;
    private LocalDate dateNasc;
    private String phone;

    private EnderecoDTO endereco;

    private List <String> perfils = new ArrayList<>();

    public UsuarioDTO(Long id, String name, String cpf, String email, Character gender, LocalDate dateNasc, String phone)
    {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.gender = gender;
        this.dateNasc = dateNasc;
        this.phone = phone;
    }
    public UsuarioDTO(Usuario entity) {

        id = entity.getId();
        name = entity.getName();
        cpf = entity.getCpf();
        email = entity.getEmail();
        gender = entity.getGender();
        dateNasc = entity.getDateNasc();
        phone = entity.getPhone();
        endereco = new EnderecoDTO(entity.getEndereco());
        for(GrantedAuthority perfil: entity.getAuthorities())
        {
            perfils.add(perfil.getAuthority());
        }
    }
    public UsuarioDTO(){
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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Character getGender() {
        return gender;
    }

    public void setGender(Character gender) {
        this.gender = gender;
    }

    public LocalDate getDateNasc() {
        return dateNasc;
    }

    public void setDateNasc(LocalDate dateNasc) {
        this.dateNasc = dateNasc;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public EnderecoDTO getEndereco() {
        return endereco;
    }

    public void setEndereco(EnderecoDTO endereco) {
        this.endereco = endereco;
    }
}