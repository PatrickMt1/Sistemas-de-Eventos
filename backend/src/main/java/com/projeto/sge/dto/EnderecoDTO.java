package com.projeto.sge.dto;
import com.projeto.sge.entities.Endereco;
import java.io.Serializable;
public class EnderecoDTO implements Serializable {
    private Long id;
    private String city;
    private String postalCode;
    private String state;
    private String street;
    private String number;

    public EnderecoDTO() {
    }
    public EnderecoDTO(Endereco entity)
    {
        id = entity.getId();
        city = entity.getCity();
        postalCode = entity.getPostalCode();
        state = entity.getState();
        street = entity.getStreet();
        number = entity.getNumber();

    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void PostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getStreet() {return street;}

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {return number;}

    public void setNumber(String number) {
        this.number = number;
    }
}
