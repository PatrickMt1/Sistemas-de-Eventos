/* eslint-disable no-undef */
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store";
import { calculateEventAmount } from "../ultils/calculateEventAmount";
import { formatPrice } from "../ultils/formatPrice";
import { CartItem } from "./CartItem";

export function CartDrawer() {
  const { isOpen, toggleCart, cart } = useCartStore();
  const navigate = useNavigate();
  const total = calculateEventAmount(cart);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={toggleCart}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Meu carrinho</DrawerHeader>

        <DrawerBody>
          <Flex direction="column" gap="4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          {cart.length > 0 && (
            <Flex flex="1" justify="space-between" align="center">
              <Text>Total: {formatPrice(total)}</Text>

              <Button colorScheme="blue" onClick={() => navigate("/payment")}>
                Finalizar compra
              </Button>
            </Flex>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
