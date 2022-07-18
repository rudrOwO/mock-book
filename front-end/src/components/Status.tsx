import { Flex, Text, Box, ScaleFade } from "@chakra-ui/react";
import { StatusInterface } from "../models/Status";
import { memo } from "react";

const Status = ({ userName, content }: StatusInterface) => (
  <Flex
    bg="white"
    padding="2%"
    width="100%"
    shadow="xl"
    borderRadius="lg"
    flexDir="column"
  >
    <ScaleFade in={true} initialScale={0.75}>
      <Box>
        <Text
          padding="1px"
          color="gray.600"
          casing={"capitalize"}
          fontSize="2xl"
          marginBottom={"3px"}
        >
          {userName}
        </Text>
        <Text padding="1px" fontSize={"lg"}>
          {content}
        </Text>
      </Box>
    </ScaleFade>
  </Flex>
);

export default memo(Status);
