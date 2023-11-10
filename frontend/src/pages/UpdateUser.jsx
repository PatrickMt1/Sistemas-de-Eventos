import { FormControl, FormLabel, Select, SimpleGrid } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Fieldset from "../components/Fieldset";
import Form from "../components/Form";
import { Input } from "../components/input";
import { api } from "../services/api";
import { states } from "../ultils/States";
import { cpfMask, phoneMask, postalCodeMask } from "../ultils/masks";
import { removeMask } from "../ultils/removeMask";
import { cleanInput } from "../ultils/cleanInput";

export default function UpdateUser() {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [dateNasc, setdateNasc] = useState();
  const [phone, setPhone] = useState();
  const [district, setDistrict] = useState();
  const [postalCode, setPostalCode] = useState();
  const [state, setState] = useState();
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const params = useParams();
  const navigate = useNavigate();

  function formatPhoneNumber(value) {
    return value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }
  const handlePhoneMask = (e) => {
    setPhone(phoneMask(e));
  };
  const handleCpfMask = (e) => {
    setCpf(cpfMask(e));
  };
  const handlePostalCodeMask = (e) => {
    setPostalCode(postalCodeMask(e));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let phoneValue = phone;
    if (typeof phoneValue !== "string") {
      phoneValue = phone.target.value;
    }
    const data = {
      name,
      cpf: removeMask(cpf),
      email,
      gender,
      dateNasc,
      phone: removeMask(phoneValue),
      ...(password && { password }),
      endereco: {
        district,
        postalCode: removeMask(postalCode),
        state,
        street,
        number,
      },
      login,
    };
    toast.promise(api.put(`/usuarios/${params.id}`, data), {
      loading: "Carregando...",
      success: <b>Atualizado!</b>,
      error: <b>Nao foi possivel Atualizar.</b>,
    });
    cleanInput();
  };

  async function fetchUserById() {
    const { data } = await api.get(`/usuarios/${params.id}`);
    setPhone(formatPhoneNumber(data.phone));
    setName(data.name);
    setCpf(data.cpf);
    setEmail(data.email);
    setGender(data.gender);
    setdateNasc(data.dateNasc);
    setLogin(data.login);
    setDistrict(data.endereco.district);
    setPostalCode(data.endereco.postalCode);
    setState(data.endereco.state);
    setStreet(data.endereco.street);
    setNumber(data.endereco.number);
  }
  useEffect(() => {
    if (!params.id) {
      navigate("/list/user");
    } else {
      fetchUserById();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Form title="Atualizar" onSubmit={onSubmit} type="reset">
      <Fieldset title="Dados do usuário">
        <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
          <Input
            name="name"
            label="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            name="cpf"
            label="CPF"
            disabled
            defaultValue={cpf}
            onKeyUp={handleCpfMask}
          />
          <FormControl>
            <FormLabel color="blackAlpha.800">Genêro</FormLabel>
            <Select
              size="md"
              name="gender"
              backgroundColor="gray.500"
              bgColor="white"
              disabled
              fontSize={17}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outro</option>
            </Select>
          </FormControl>
          <Input
            name="dataNasc"
            type="date"
            label="Data de Nascimento"
            disabled
            value={dateNasc}
            onChange={(e) => setdateNasc(e.target.value)}
          />
          <Input
            defaultValue={phone}
            onKeyUp={handlePhoneMask}
            name="phone"
            type="text"
            placeholder="(xx) xxxxx-xxxx"
            label="Celular"
          />
          <Input
            name="login"
            label="Login"
            disabled
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            name="password_confirmation"
            type="password"
            label="Confirmação da senha"
          />
        </SimpleGrid>
      </Fieldset>
      <Fieldset title="Endereço">
        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]}>
          <Input
            name="bairro"
            label="Bairro"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <Input
            name="cep"
            label="CEP"
            defaultValue={postalCode}
            onKeyUp={handlePostalCodeMask}
          />
          <FormControl>
            <FormLabel color="blackAlpha.800">Estado</FormLabel>
            <Select
              size="md"
              fontSize={17}
              backgroundColor="gray.500"
              bgColor="white"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </FormControl>
          <Input
            name="rua"
            label="Rua"
            placeholder="Ex: Rua Joaquim Eusébio"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <Input
            type="number"
            name="numero"
            label="Número"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </SimpleGrid>
      </Fieldset>
    </Form>
  );
}
