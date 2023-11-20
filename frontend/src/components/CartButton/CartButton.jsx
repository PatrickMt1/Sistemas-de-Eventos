import { Badge, Button } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartStore } from "../../store";

function CartButton() {
  const { cart, toggleCart } = useCartStore();

  return (
    <Button left="1120" fontSize={20} onClick={toggleCart}>
      <Badge
        position="absolute"
        top="0"
        right="0"
        borderRadius="full"
        bg="green"
        color="white"
      >
        {cart.length}
      </Badge>
      <AiOutlineShoppingCart />
    </Button>
  );
}

export default CartButton;
