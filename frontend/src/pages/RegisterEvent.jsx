import { FormControl, FormLabel, SimpleGrid, Textarea } from "@chakra-ui/react";

import { useState } from "react";
import toast from "react-hot-toast";
import Fieldset from "../components/Fieldset";
import Form from "../components/Form";
import UploadFile from "../components/UploadFIle";
import { Input } from "../components/input";
import { api } from "../services/api";
import { cleanInput } from "../ultils/cleanInput";

export default function RegisterEvent() {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      date,
      time,
      price,
      image,
    };
    console.log(data);
    toast.promise(api.post("/eventos", data), {
      loading: "Carregando...",
      success: <b>Cadastrado!</b>,
      error: <b>Nao foi possivel cadastrar.</b>,
    });
    cleanInput();
  };
  return (
    <Form title="Evento" onSubmit={onSubmit}>
      <SimpleGrid w={["300px", "200px", "500px", "400px"]} spacing={["6", "8"]}>
        <Fieldset title="Dados do usuário">
          <Input
            name="name"
            label="Nome do Evento"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="date"
            name="dataEvento"
            label="Data Evento"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Input
            type="time"
            name="horarioEvento"
            label="Horário"
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <FormControl>
            <FormLabel color="white">Descição do Evento</FormLabel>
            <Textarea
              placeholder=""
              bgColor="white"
              focusBorderColor="pink.500"
              _hover={{
                bgColor: "gray.100",
              }}
              onChange={(e) => setPrice(e.target.value)}
              required
            ></Textarea>
          </FormControl>
        </Fieldset>
        <UploadFile onChange={(e) => setImage(e.target.files[0])} />
      </SimpleGrid>
    </Form>
  );
}
