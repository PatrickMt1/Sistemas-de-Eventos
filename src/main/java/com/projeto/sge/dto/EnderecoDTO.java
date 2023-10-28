package com.projeto.sge.dto;
import com.projeto.sge.entities.Endereco;
import java.io.Serializable;
public class EnderecoDTO implements Serializable {
    private Long id;
    private String bairro;
    private String cep;
    private String estado;
    private String rua;
    private String numero;

    public EnderecoDTO() {
    }
    public EnderecoDTO(Endereco entity)
    {
        id = entity.getId();
        bairro = entity.getBairro();
        cep = entity.getCep();
        estado = entity.getEstado();
        rua = entity.getRua();
        numero = entity.getNumero();

    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getRua() {return rua;}

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getNumero() {return numero;}

    public void setNumero(String numero) {
        this.numero = numero;
    }
}
