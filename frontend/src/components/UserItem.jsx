/* eslint-disable react/prop-types */
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ButtonGroup, IconButton, Td, Tr } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function UserItem({ user, onUpdate, onDelete }) {
  return (
    <Tr>
      <Td>{user.id}</Td>
      <Td>{user.name}</Td>
      <Td>{user.cpf}</Td>
      <Td>{user.email}</Td>
      <Td>
        <ButtonGroup>
          <IconButton
            as={Link}
            bg="yellow.400"
            to={`/update/user/${user.id}`}
            size="sm"
            onClick={onUpdate}
            icon={<EditIcon />}
          />
          <IconButton
            bg="red.400"
            size="sm"
            onClick={onDelete}
            icon={<DeleteIcon />}
          />
        </ButtonGroup>
      </Td>
    </Tr>
  );
}
