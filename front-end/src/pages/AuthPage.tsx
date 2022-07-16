import { Tab, Tabs, ScaleFade, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { AuthForm } from "../components/AuthForm";

export const AuthPage = () => {
  return (
    <Tabs
      bg="white"
      padding="2%"
      width={["95%", "80%", "50%"]}
      height="auto"
      shadow="xl"
      borderRadius="lg"
      isFitted
      variant="enclosed"
      defaultIndex={1}
    >
      <TabList mb="1em" bg="gray.100" borderRadius="lg">
        <Tab _selected={{ color: "white", bg: "blue.500" }} fontSize="xl">
          Login
        </Tab>
        <Tab _selected={{ color: "white", bg: "blue.500" }} fontSize="xl">
          Register
        </Tab>
      </TabList>
      <ScaleFade in={true} initialScale={0.75}>
        <TabPanels>
          <TabPanel>
            <AuthForm type="login" />
          </TabPanel>
          <TabPanel>
            <AuthForm type="register" />
          </TabPanel>
        </TabPanels>
      </ScaleFade>
    </Tabs>
  );
};
