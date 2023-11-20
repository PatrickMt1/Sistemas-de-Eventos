import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useCartStore } from "../../store";
function Cart() {
  const { cart } = useCartStore();

  return (
    <Flex direction="column">
      {cart.map((item) => (
        <Flex key={item.id}>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Box>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
            <Flex>
              {item.quantity}
              <Text>{item.price}</Text>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
}
export default Cart;
