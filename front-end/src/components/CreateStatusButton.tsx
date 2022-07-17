import { BsPlusLg } from "react-icons/bs";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  onOpen: () => void;
}

export const CreateStatusButton = ({ onOpen }: Props) => (
  <Button
    position="absolute"
    ml="85vw"
    mt="90vh"
    mr="10vw"
    mb="5vh"
    colorScheme="blue"
    borderRadius={"full"}
    size="lg"
    onClick={onOpen}
  >
    <BsPlusLg fontSize="25px" />
    {window.innerWidth > 900 ? (
      <Text fontSize="xl" ml="20px" mt="5px">
        Post Status
      </Text>
    ) : null}
  </Button>
);
