import { chakra, Flex } from "@chakra-ui/react";
import { LogoutButton } from "./Logout";

export const Navbar = () => (
  <chakra.nav
    shadow="xl"
    padding="10px"
    fontSize="xl"
    color="white"
    fontFamily="Discoteque St"
    width="100%"
    bg="blue.500"
    position="fixed"
  >
    <Flex my="-8px" alignItems="center" justifyContent="space-between">
      Mock Book
      <LogoutButton />
    </Flex>
  </chakra.nav>
);
