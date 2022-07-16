import { chakra, Flex } from "@chakra-ui/react";
import { useAuthentication } from "../utils/hooks";
import { LogoutButton } from "./Logout";

export const Navbar = () => {
  const { isAuthenticated } = useAuthentication();

  return (
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
      {isAuthenticated ? <LogoutButton /> : null}
    </chakra.nav>
  );
};
