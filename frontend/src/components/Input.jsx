/* eslint-disable react/prop-types */
import {
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { forwardRef } from "react";

const InputBase = ({ error, name, label, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel color="blackAlpha.800">{label}</FormLabel>

      <ChakraInput
        size="md"
        bgColor="white"
        focusBorderColor="green.500"
        ref={ref}
        name={name}
        _hover={{
          bgColor: "gray.100",
        }}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
