/* eslint-disable react/prop-types */
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ButtonGroup, IconButton, Td, Tr } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function EventItem({ event, onUpdate, onDelete }) {
  return (
    <Tr>
      <Td>{event.id}</Td>
      <Td>{event.name}</Td>
      <Td>{event.date}</Td>
      <Td>{event.time}</Td>
      <Td>{event.description}</Td>
      <Td>
        <ButtonGroup>
          <IconButton
            bg="yellow.400"
            as={Link}
            to={`/update/evento/${event.id}`}
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
