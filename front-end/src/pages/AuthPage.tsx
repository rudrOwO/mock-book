import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { AuthForm } from "../components/AuthForm";

export const AuthPage = () => {
  return (
    <Tabs
      bg="white"
      padding="2%"
      width={["90%", "80%", "60%"]}
      height="auto"
      shadow="xl"
      borderRadius="lg"
      isFitted
      variant="enclosed"
    >
      <TabList mb="1em" bg="gray.100" borderRadius="lg">
        <Tab _selected={{ color: "white", bg: "blue.500" }} fontSize="xl">
          Login
        </Tab>
        <Tab _selected={{ color: "white", bg: "blue.500" }} fontSize="xl">
          Register
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AuthForm type="login" />
        </TabPanel>
        <TabPanel>
          <AuthForm type="register" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
