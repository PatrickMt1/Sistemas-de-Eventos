import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import UserItem from "../components/UserItem";
import ModalConfirm from "../components/ModalConfirm";
import { api } from "../services/api";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  async function fetchUsers() {
    const response = await api.get("/usuarios");
    setUsers(response.data);
  }

  async function handleRemoveUser() {
    await api.delete(`/usuarios/${selectedUser}`);
    await fetchUsers();
  }

  function onCancelModel() {
    setIsOpen(false);
  }

  function onOpenModel(userId) {
    setIsOpen(true);
    setSelectedUser(userId);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const ListUsers = users.map((user) => {
    return (
      <UserItem
        user={user}
        key={user.id}
        onDelete={() => onOpenModel(user.id)}
      />
    );
  });

  return (
    <TableContainer>
      <ModalConfirm
        title="Deseja remover usuário?"
        onConfirm={handleRemoveUser}
        isOpen={isOpen}
        onClose={onCancelModel}
      />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>CPF</Th>
            <Th>Email</Th>
            <Th>Opções</Th>
          </Tr>
        </Thead>
        <Tbody>{ListUsers}</Tbody>
      </Table>
    </TableContainer>
  );
}
