package com.projeto.sge.dto;
import com.projeto.sge.entities.Usuario;
import java.time.LocalDate;

public class UsuarioDTO {
    private Long id;
    private String nome;
    private String email;
    private Character sexo;
    private LocalDate dataNascimento;
    private String telefone;
    private String login;
    private String senha;

    private EnderecoDTO endereco;

    public UsuarioDTO(Long id, String nome, String email, Character sexo, LocalDate dataNascimento, String telefone, String login, String senha)
    {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.login = login;
        this.senha = senha;
    }
    public UsuarioDTO(Usuario entity) {
        id = entity.getId();
        nome = entity.getNome();
        email = entity.getEmail();
        sexo = entity.getSexo();
        dataNascimento = entity.getDataNascimento();
        telefone = entity.getTelefone();
        login = entity.getLogin();
        senha = entity.getSenha();
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

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Character getSexo() {
        return sexo;
    }

    public void setSexo(Character sexo) {
        this.sexo = sexo;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {this.dataNascimento = dataNascimento;}

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public EnderecoDTO getEndereco() {
        return endereco;
    }

    public void setEndereco(EnderecoDTO endereco) {
        this.endereco = endereco;
    }
}
