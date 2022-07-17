import { chakra } from "@chakra-ui/react";
import { LogoutButton } from "./LogoutButton";

export const Navbar = () => (
  <chakra.nav
    shadow="xl"
    padding="10px"
    fontSize="xl"
    color="white"
    fontFamily="Discoteque St"
    width="100%"
    height="6%"
    bg="blue.500"
    position="sticky"
    top="0"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
  >
    Mock Book
    <LogoutButton />
  </chakra.nav>
);
