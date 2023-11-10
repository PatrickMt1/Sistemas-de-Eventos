/* eslint-disable react/prop-types */
import {
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FiAirplay,
  FiArrowRight,
  FiHome,
  FiMenu,
  FiUsers,
} from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

const linkItems = [
  { name: "Página Inicial", icon: FiHome, path: "admin" },
  { name: "Usuários", icon: FiUsers, path: "list/user" },
  { name: "Eventos", icon: FiArrowRight, path: "list/event" },
  { name: "Pagamento", icon: FiAirplay, path: "payment" },
];

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        backgroundColor="blackAlpha.600"
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("black", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="hairline">
          Painel
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <Link key={link.name} to={`/${link.path}`}>
          <NavItem icon={link.icon}>{link.name}</NavItem>
        </Link>
      ))}
    </Box>
  );
};
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.800",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "red",
            }}
            as={icon}
          />
        )}

        {children}
      </Flex>
    </Box>
  );
};
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
