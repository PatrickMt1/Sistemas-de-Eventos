package com.projeto.sge.dto;

import com.projeto.sge.entities.Usuario;

import java.time.LocalDate;
import java.util.Objects;

public class UsuarioInsertDTO extends UsuarioDTO
{
    private String password;
    public UsuarioInsertDTO()
    {
        super();
    }
    public UsuarioInsertDTO(Long id, String name, String cpf, String email, Character gender, LocalDate dateNasc, String phone) {
        super(id, name, cpf, email, gender, dateNasc, phone);
        this.password = password;
    }

    public UsuarioInsertDTO(Usuario entity) {
        setId(entity.getId());
        setName(entity.getName());
        setCpf(entity.getCpf());
        setEmail(entity.getEmail());
        setGender(entity.getGender());
        setDateNasc(entity.getDateNasc());
        setPhone(entity.getPhone());
        setEndereco(new EnderecoDTO(entity.getEndereco()));
        password = entity.getPassword();
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Override
    public int hashCode() {
        return Objects.hash(password);
    }
    @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            UsuarioInsertDTO that = (UsuarioInsertDTO) o;
            return Objects.equals(password, that.password);
        }
}

