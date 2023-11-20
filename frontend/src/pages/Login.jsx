import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import * as loginService from "../services/login-service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    loginService
      .findUseRequest(email)
      .then((response) => {
        if (response) {
          navigate("/catalog");
        }
      })
      .catch((error) => {
        setError("Digite um usuário existente", error);
      });
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SimpleGrid w="100%" spacing={["6", "8"]}>
            <Input
              type="password"
              name="password"
              label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </SimpleGrid>
          <Flex mt="8" justify="flex-end">
            <HStack>
              <Text
                color="white"
                fontSize="md"
                fontWeight="bold"
                letterSpacing="0.5px"
                onClick={() => navigate("/registerUser")}
              >
                Inscreva-se
              </Text>
              <Button type="submit" colorScheme="green">
                Entrar
              </Button>
              <Button as="a" colorScheme="red">
                Cancelar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Stack>
      <p>{error}</p>
    </Box>
  );
}
