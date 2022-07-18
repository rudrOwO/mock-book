import { MdPostAdd } from "react-icons/md";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  onOpen: () => void;
}

export const CreateStatusButton = ({ onOpen }: Props) => (
  <Button
    position="absolute"
    height="60px"
    ml="85vw"
    mt="90vh"
    mr="10vw"
    mb="5vh"
    colorScheme="blue"
    borderRadius="xl"
    size="lg"
    onClick={onOpen}
  >
    <MdPostAdd fontSize="30px" />
    <Text display={["none", "none", "inline"]} fontSize="xl" ml="10px" mt="5px">
      Post Status
    </Text>
  </Button>
);
