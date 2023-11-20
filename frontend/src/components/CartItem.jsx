/* eslint-disable react/prop-types */
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useCartStore } from "../store";
import { formatPrice } from "../ultils/formatPrice";

export function CartItem({ item }) {
  const { addEventToCart, removeEventFromCart } = useCartStore();
  return (
    <Flex justify="center" align="center">
      <Image
        boxSize="80px"
        objectFit="cover"
        src={item.image}
        alt="Dan Abramov"
      />{" "}
      <Flex direction="column" flex="1" pl="4" gap="0.5">
        <Text maxW="32" noOfLines={1} fontWeight="bold">
          {item.name}
        </Text>
        <Text>{dayjs(new Date(item.date)).format("ll")}</Text>
        <Text color="green.500">{formatPrice(item.price)}</Text>
        <ButtonGroup size="xs" isAttached variant="outline">
          <IconButton
            aria-label="Diminuir quantidade de evento"
            onClick={() => removeEventFromCart(item)}
            icon={<MinusIcon />}
          />
          <Button
            _hover={{
              color: "none",
              cursor: "default",
            }}
            _focus={{
              background: "none",
            }}
            disabled
          >
            {item.quantity}
          </Button>
          <IconButton
            aria-label="Adicionar quantidade de evento"
            onClick={() => addEventToCart(item)}
            icon={<AddIcon />}
          />
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
