package com.projeto.sge.dto;
import com.projeto.sge.entities.Usuario;
import java.time.LocalDate;

public class UsuarioDTO {
    private Long id;
    private String name;
    private String cpf;
    private String email;
    private Character gender;
    private LocalDate dateNasc;
    private String phone;
    private String login;
    private String password;



    private EnderecoDTO endereco;

    public UsuarioDTO(Long id, String name, String cpf, String email, Character gender, LocalDate dateNasc, String phone, String login, String password)
    {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.gender = gender;
        this.dateNasc = dateNasc;
        this.phone = phone;
        this.login = login;
        this.password = password;
    }
    public UsuarioDTO(Usuario entity) {
        id = entity.getId();
        name = entity.getName();
        cpf = entity.getCpf();
        email = entity.getEmail();
        gender = entity.getGender();
        dateNasc = entity.getdateNasc();
        phone = entity.getPhone();
        login = entity.getLogin();
        password = entity.getPassword();
        endereco = new EnderecoDTO(entity.getEndereco());
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

    public LocalDate getdateNasc() {
        return dateNasc;
    }

    public void setdateNasc(LocalDate dateNasc) {
        this.dateNasc = dateNasc;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public EnderecoDTO getEndereco() {
        return endereco;
    }

    public void setEndereco(EnderecoDTO endereco) {
        this.endereco = endereco;
    }
}