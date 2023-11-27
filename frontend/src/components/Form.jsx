import { Button, Flex, HStack, Heading, VStack } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Form({ title, children, onSubmit }) {
  const navigate = useNavigate();
  return (
    <>
      <Toaster />
      <Flex
        onSubmit={onSubmit}
        direction="column"
        as="form"
        bg="facebook.500"
        p={["6", "8"]}
        borderRadius={8}
      >
        <Heading
          size="lg"
          fontWeight="semibold"
          color="black"
          textAlign="center"
          mb="4"
        >
          {title}
        </Heading>

        <Flex direction="column" justifyContent="space-between" flex="1">
          <VStack spacing="6">{children}</VStack>
          <Flex mt="2" justify="center">
            <HStack spacing="4">
              <Button type="submit" colorScheme="green">
                Salvar
              </Button>
              <Button
                type="reset"
                colorScheme="yellow"
                onClick={() => navigate("/list/user")}
              >
                Voltar
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
