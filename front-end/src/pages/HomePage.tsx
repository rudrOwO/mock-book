import { StatusInterface } from "../models/Status";
import { Flex, useDisclosure, VStack } from "@chakra-ui/react";
import { CreateStatusButton } from "../components/CreateStatusButton";
import { CreateStatusModal } from "../components/CreateStatusModal";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Status } from "../components/Status";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  const [statusList, setStatusList] = useState<[StatusInterface] | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/status`, {
      method: "GET",
      credentials: "include",
    })
      .then(response => response.json())
      .then(response => {
        setStatusList(response);
      });
  }, [isOpen]);

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      height="100vh"
      width="100vw"
      overflow="scroll"
      bg="gray.100"
    >
      <Navbar />
      <VStack marginTop="2%" spacing="8" width={["95%", "80%", "50%"]}>
        {statusList?.map((status: StatusInterface) => (
          <Status
            key={status.createdAt}
            userName={status.userName}
            content={status.content}
          />
        ))}
      </VStack>
    </Flex>
  );
};
