/* eslint-disable react/prop-types */
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useCartStore } from "../store";
import { formatPrice } from "../ultils/formatPrice";

export function CatalogItem({ item }) {
  const { addEventToCart } = useCartStore();

  // const data = {
  //   name,
  //   date,
  //   time,
  //   price,
  //   image,
  // };
  // useEffect(() => {}, []);

  return (
    <Flex>
      <Image boxSize="120px" objectFit="cover" src={item.image} alt="" />

      <Flex direction="column" flex="1" pl="4" gap="0.5">
        <Text noOfLines={2} fontWeight="bold">
          {item.name}
        </Text>
        <Text>{dayjs(new Date(item.date)).format("ll")}</Text>
        <Text color="green.500">{formatPrice(item.price)}</Text>
        <Button
          maxW="40"
          colorScheme="teal"
          size="sm"
          onClick={() => addEventToCart(item)}
        >
          Adicionar ao carrinho
        </Button>
      </Flex>
    </Flex>
  );
}
