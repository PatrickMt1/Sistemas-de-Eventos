package com.projeto.sge.entities;
import javax.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import java.util.Objects;
@Entity
@Table(name="tb_perfil")
public class Perfil  implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String authority;

    public Perfil(){
    }
    public Perfil(Long id, String authority) {
        this.id = id;
        this.authority = authority;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Perfil perfil = (Perfil) o;
        return Objects.equals(id, perfil.id);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
