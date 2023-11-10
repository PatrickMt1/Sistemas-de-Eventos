import { FormControl, FormLabel, SimpleGrid, Textarea } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Fieldset from "../components/Fieldset";
import Form from "../components/Form";
import UploadFile from "../components/UploadFIle";
import { Input } from "../components/input";
import { api } from "../services/api";
import { cleanInput } from "../ultils/cleanInput";

export default function UpdateEvent() {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      date,
      time,
      price,
      image,
    };
    toast.promise(api.put(`/eventos/${params.id}`, data), {
      loading: "Carregando...",
      success: <b>Atualizado!</b>,
      error: <b>Nao foi possivel Atualizar.</b>,
    });
    cleanInput();
  };

  async function fetchEventById() {
    const { data } = await api.get(`/eventos/${params.id}`);
    setName(data.name);
    setDate(data.date);
    setTime(data.time);
    setPrice(data.price);
    setImage(data.image);
  }

  useEffect(() => {
    if (!params.id) {
      navigate("/list/event");
    } else {
      fetchEventById();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Form title="Atualizar Evento" onSubmit={onSubmit}>
      <SimpleGrid w={["300px", "200px", "500px", "400px"]} spacing={["6", "8"]}>
        <Fieldset title="Dados do usuário">
          <Input
            name="name"
            label="Nome do Evento"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <Input
            type="date"
            name="dataEvento"
            label="Data Evento"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
          <Input
            type="time"
            name="horarioEvento"
            label="Horário"
            onChange={(e) => setTime(e.target.value)}
            value={time}
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
              value={price}
              required
            ></Textarea>
          </FormControl>
        </Fieldset>
        <UploadFile onChange={(e) => setImage(e.target.value)} />
      </SimpleGrid>
    </Form>
  );
}
