import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

export default function WithSubnavigation() {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        bg="cyan.700"
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={2}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            color="black"
            fontSize="xl"
            fontWeight="bold"
            letterSpacing="3px"
          >
            Sistema de Eventos
          </Text>
        </Flex>

        <Button
          as={"a"}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color="black"
          bg={"red.400"}
          href={"#"}
          _hover={{
            bg: "green",
          }}
          onClick={() => navigate("/login")}
        >
          Sair
        </Button>
      </Flex>
      <Outlet />
    </Box>
  );
}
