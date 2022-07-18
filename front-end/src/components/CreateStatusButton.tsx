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
    borderRadius="xl"
    size="lg"
    onClick={onOpen}
  >
    <BsPlusLg fontSize="25px" />
    <Text display={["none", "none", "inline"]} fontSize="xl" ml="20px" mt="5px">
      Post Status
    </Text>
  </Button>
);
