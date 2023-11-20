package com.projeto.sge.entities;
import javax.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.time.LocalDate;
import java.util.*;

@Entity
@Table(name = "tb_usuario")
public class Usuario implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String cpf;
    @Column(unique = true)
    private String email;
    private Character gender;
    private LocalDate dateNasc;
    private String phone;
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "tb_perfil_usuario",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "perfil_id"))
    private Set<Perfil> perfil = new HashSet<>();

    @ManyToMany(mappedBy = "usuario")
    private List<Pedido> pedido = new ArrayList<>();
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;

    public Usuario(Long id, String name, String cpf, String email, Character gender, LocalDate dateNasc, String phone, String password) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.gender = gender;
        this.dateNasc = dateNasc;
        this.phone = phone;
        this.password = password;
    }
    public Usuario() {
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Perfil> getPerfil() {
        return perfil;
    }

    public List<Pedido> getPedido() {
        return pedido;
    }
    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return perfil;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario = (Usuario) o;
        return Objects.equals(id, usuario.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
