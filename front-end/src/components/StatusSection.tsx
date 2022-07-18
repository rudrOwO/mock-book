import { StatusInterface } from "../models/Status";
import { useDisclosure, VStack } from "@chakra-ui/react";
import { CreateStatusButton } from "../components/CreateStatusButton";
import { CreateStatusModal } from "../components/CreateStatusModal";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Status from "../components/Status";

interface Props {
  flex: number;
}

export const StatusSection = ({ flex }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [statusList, setStatusList] = useState<[StatusInterface] | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/status`, {
          method: "GET",
          credentials: "include",
        })
          .then(response => response.json())
          .then(response => {
            setIsLoading(false);
            setStatusList(response);
          });
      }, 100);
    }
  }, [isOpen]);

  return (
    <>
      <CreateStatusButton onOpen={onOpen} />
      {isLoading ? (
        <LoadingSpinner size="xl" />
      ) : (
        <VStack flex={flex} marginY="30px" spacing="8" width={["95%", "80%", "50%"]}>
          {statusList?.map((status: StatusInterface) => (
            <Status
              key={status.createdAt}
              userName={status.userName}
              content={status.content}
            />
          ))}
        </VStack>
      )}
      <CreateStatusModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
