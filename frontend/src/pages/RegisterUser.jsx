import { FormControl, FormLabel, Select, SimpleGrid } from "@chakra-ui/react";

import { useState } from "react";
import toast from "react-hot-toast";
import Fieldset from "../components/Fieldset";
import Form from "../components/Form";
import { Input } from "../components/input";
import { api } from "../services/api";
import { states } from "../ultils/States";
import { cpfMask, phoneMask, postalCodeMask } from "../ultils/masks";
import { removeMask } from "../ultils/removeMask";
import { cleanInput } from "../ultils/cleanInput";

export default function RegisterUser() {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [dateNasc, setdateNasc] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [state, setState] = useState();
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();

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

    const data = {
      name,
      cpf: removeMask(cpf.target.value),
      email,
      gender,
      dateNasc,
      phone: removeMask(phone.target.value),
      endereco: {
        city,
        postalCode: removeMask(postalCode.target.value),
        state,
        street,
        number,
      },
      password,
    };
    toast.promise(api.post("/usuarios", data), {
      loading: "Carregando...",
      success: <b>Cadastrado!</b>,
      error: <b>Nao foi possivel cadastrar.</b>,
    });
    cleanInput();
  };
  return (
    <Form title="Cadastro de Usuário" onSubmit={onSubmit}>
      <Fieldset title="Dados do usuário">
        <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
          <Input
            name="name"
            label="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            type="text"
            name="cpf"
            label="CPF"
            defaultValue={cpf}
            onKeyUp={handleCpfMask}
            required
          />
          <FormControl>
            <FormLabel color="blackAlpha.800">Genêro</FormLabel>
            <Select
              size="md"
              name="gender"
              backgroundColor="gray.500"
              bgColor="white"
              fontSize={17}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required="Selecione"
            >
              <option>Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outro</option>
            </Select>
          </FormControl>
          <Input
            type="date"
            name="dataNasc"
            label="Data de Nascimento"
            value={dateNasc}
            onChange={(e) => setdateNasc(e.target.value)}
            required
          />
          <Input
            defaultValue={phone}
            onKeyUp={handlePhoneMask}
            name="phone"
            type="text"
            placeholder="(xx) xxxxx-xxxx"
            label="Celular"
            required
          />
          <Input
            type="email"
            name="email"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minlength="6"
          />
        </SimpleGrid>
      </Fieldset>
      <Fieldset title="Endereço">
        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]}>
          <Input
            name="cidade"
            label="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <Input
            name="cep"
            label="CEP"
            defaultValue={postalCode}
            onKeyUp={handlePostalCodeMask}
            required
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
              required
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
            required
          />
          <Input
            type="number"
            name="numero"
            label="Número"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </SimpleGrid>
      </Fieldset>
    </Form>
  );
}
