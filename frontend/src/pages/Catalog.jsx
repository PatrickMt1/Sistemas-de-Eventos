import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CartButton from "../components/CartButton/CartButton";
import { CartDrawer } from "../components/CartDrawer";
import { CatalogItem } from "../components/CatalogItem";
import { api } from "../services/api";

export default function Catalog() {
  const [events, setEvents] = useState([]);

  async function fetchEvent() {
    const response = await api.get("/eventos");
    setEvents(response.data);
  }

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <>
      <CartDrawer />
      <CartButton />
      <SimpleGrid columns={3} p="6" spacing={10}>
        {events.map((event) => (
          <CatalogItem item={event} key={event.id} />
        ))}
      </SimpleGrid>
    </>
  );
}
