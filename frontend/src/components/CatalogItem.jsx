/* eslint-disable react/prop-types */
import { Box, Button, Img, Td, Tr } from "@chakra-ui/react";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function CatalogItem({ event }) {
  return (
    <Box>
      <Tr>
        <Td>
          <Img
            w={100}
            src="https://timelyapp-prod.s3.us-west-2.amazonaws.com/images/54710516/369992627_18227398309243353_443961564958297630_n_ELau.jpg	"
          />
        </Td>
        <Td>{event.name}</Td>
        <Td>{event.date}</Td>
        <Td>{event.time}</Td>
        <Td>
          {event.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Td>

        <Button
          w={50}
          color="green"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="none"
          borderRadius={10}
          backgroundColor="blackAlpha.600"
          fontSize={15}
          type="buttom"
          className="button-add"
          cursor="pointer"
        >
          <BsFillCartPlusFill />
        </Button>
      </Tr>
    </Box>
  );
}
