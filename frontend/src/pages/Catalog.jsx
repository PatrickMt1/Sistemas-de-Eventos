import { Table, Tbody } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CatalogItem from "../components/CatalogItem";
import { api } from "../services/api";

export default function Catalog() {
  const [events, setEvents] = useState([]);

  //const [searchBar, setSearchBar] = useState("");

  async function fetchEvent() {
    const response = await api.get("/eventos");
    setEvents(response.data);
  }

  useEffect(() => {
    fetchEvent();
  }, []);

  const ListEvent = events.map((event) => {
    return (
      <CatalogItem
        bg="red"
        event={event}
        key={event.id}
        // eslint-disable-next-line no-undef
        onDelete={() => onOpenModel(event.id)}
      />
    );
  });

  return (
    <Table>
      <Tbody>{ListEvent}</Tbody>
    </Table>
  );
}
