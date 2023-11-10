import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Input } from "../components/input";
import { useState } from "react";
import { api } from "../services/api";

export default function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(login, password);
    try {
      await api.post(
        "/usuarios",
        { login, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status == 401) {
        setError("Usuario ou senha  inválidos");
      }
    }
  };
  return (
    <Box>
      <Stack my="20" px="450" w="100" mx="auto" maxW={1480}>
        <Box
          as="form"
          onSubmit={handleLogin}
          flex="1"
          bg="gray.800"
          p={["6", "8"]}
          borderRadius={20}
        >
          <Heading size="lg" fontWeight="normal" color="white">
            Login
          </Heading>
          <Divider my="6" borderColor="gray.500" />
          <Input
            type="text"
            name="user"
            label="Usuario"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
            <Input
              type="password"
              name="password"
              label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </SimpleGrid>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button as="a" colorScheme="red">
                Cancelar
              </Button>
              <Button type="submit" colorScheme="green">
                Entrar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Stack>
      <p>{error}</p>
    </Box>
  );
}
