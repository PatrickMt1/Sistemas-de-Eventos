import { Button, Input, Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { api } from "../services/api";
import CartButton from "./CartButton/CartButton";

function SearchBar() {
  const [searchBar, setSearchBar] = useState("");

  async function fetchEvent() {
    const response = await api.get(setSearchBar);
    setSearchBar(response);
  }
  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <Table display="flex">
      <Input
        type="search"
        placeholder="Buscar eventos"
        width={80}
        value={searchBar}
        onChange={({ target }) => setSearchBar(target.value)}
      ></Input>
      <Button type="submit" name="search-itens">
        <BsSearch />
      </Button>
      <CartButton />
    </Table>
  );
}

export default SearchBar;
