import {
  Input,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import EventItem from "../components/EventItem";
import ModalConfirm from "../components/ModalConfirm";
import { api } from "../services/api";

export default function ListEvent() {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  //const [searchBar, setSearchBar] = useState("");

  async function fetchEvent() {
    const response = await api.get("/eventos");
    setEvents(response.data);
  }

  async function handleRemoveEvent() {
    await api.delete(`/eventos/${selectedEvent}`);
    await fetchEvent();
  }

  function onCancelModel() {
    setIsOpen(false);
  }

  function onOpenModel(eventId) {
    setIsOpen(true);
    setSelectedEvent(eventId);
  }

  useEffect(() => {
    fetchEvent();
  }, []);

  const ListEvent = events.map((event) => {
    return (
      <EventItem
        bg="red"
        event={event}
        key={event.id}
        onDelete={() => onOpenModel(event.id)}
      />
    );
  });

  return (
    <TableContainer>
      <Input
        w={("500px", "300px")}
        bgColor="blackAlpha.400"
        focusBorderColor="green.500"
        _hover={{
          bgColor: "gray.300",
        }}
        // onChange={({ target }) => setSearchBar(target.value)}
      />
      <SimpleGrid
        w="100%"
        minChildWidth="240px"
        spacing={["6", "8"]}
      ></SimpleGrid>
      <ModalConfirm
        b
        title="Deseja remover evento?"
        onConfirm={handleRemoveEvent}
        isOpen={isOpen}
        onClose={onCancelModel}
      />

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Data</Th>
            <Th>Horário</Th>
            <Th>Descrição</Th>
            <Th>Editar\Excluir</Th>
          </Tr>
        </Thead>
        <Tbody>{ListEvent}</Tbody>
      </Table>
    </TableContainer>
  );
}
