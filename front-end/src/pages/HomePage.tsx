import { Flex, useDisclosure, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { StatusSection } from "../components/StatusSection";
import { Navbar } from "../components/Navbar";
import { StorySection } from "../components/StorySection";

export const HomePage = () => {
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
      <StorySection flex={1} />
      <StatusSection flex={5} />
    </Flex>
  );
};
