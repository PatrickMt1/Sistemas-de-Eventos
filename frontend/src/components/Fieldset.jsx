import { Box, Divider, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function Fieldset({ title, children }) {
  return (
    <Box
      borderWidth="1px"
      p={4}
      borderRadius="md"
      w="100%"
      borderColor="cyan.700"
    >
      <Text as="legend" color="white" fontSize="lg" fontWeight="bold" pb={2}>
        {title}
      </Text>
      <Divider mb="4" borderColor="cyan.600" />
      {children}
    </Box>
  );
}
