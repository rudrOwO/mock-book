import { IconButton, Tooltip } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";

export const LogoutButton = () => {
  return (
    <Tooltip marginY="5px" label=" Log Out" hasArrow shouldWrapChildren>
      <IconButton
        colorScheme="blue"
        aria-label="Log Out"
        justifyContent="center"
        _hover={{
          background: "blue.400",
        }}
        size="lg"
      >
        <MdLogout />
      </IconButton>
    </Tooltip>
  );
};
