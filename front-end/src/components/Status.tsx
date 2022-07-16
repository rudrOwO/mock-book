import { Flex, Text, ScaleFade } from "@chakra-ui/react";
import { StatusInterface } from "../models/Status";

export const Status = ({ userName, content }: StatusInterface) => (
  <ScaleFade in={true} initialScale={0.75}>
    <Flex
      bg="white"
      padding="2%"
      width="100%"
      shadow="xl"
      borderRadius="lg"
      flexDir="column"
    >
      <Text color="gray.600" casing={"capitalize"} fontSize="2xl" marginBottom={"3px"}>
        {userName}
      </Text>
      <Text fontSize={"lg"}>{content}</Text>
    </Flex>
  </ScaleFade>
);
