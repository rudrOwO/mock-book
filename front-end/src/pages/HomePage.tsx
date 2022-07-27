import { Flex, Divider } from "@chakra-ui/react";
import { StatusSection } from "../components/StatusSection";
import { Navbar } from "../components/Navbar";
import { StorySection } from "../components/StorySection";

export const HomePage = () => {
  return (
    <Flex flexDir="column" alignItems="center" height="100vh" width="100vw" bg="gray.100">
      <Navbar />
      <StorySection />
      <StatusSection />
    </Flex>
  );
};
