import { IconButton, Tooltip } from "@chakra-ui/react";
import { useCallback } from "react";
import { MdLogout } from "react-icons/md";
import { useAuthentication } from "../utils/hooks";

export const LogoutButton = () => {
  const { setIsAuthenticated } = useAuthentication();

  const handleLogout = useCallback(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/logout`, {
      method: "GET",
      credentials: "include",
    })
      .then(_ => setIsAuthenticated(false))
      .catch(_ => console.log("Logout Handler : Something went wrong"));
  }, []);

  return (
    <Tooltip label=" Log Out" hasArrow shouldWrapChildren>
      <IconButton
        colorScheme="blue"
        aria-label="Log Out"
        justifyContent="center"
        _hover={{
          background: "blue.400",
        }}
        size="md"
        onClick={handleLogout}
      >
        <MdLogout size="50%" />
      </IconButton>
    </Tooltip>
  );
};
