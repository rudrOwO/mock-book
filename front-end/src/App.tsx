import { ChakraProvider, Box, theme, Center, Flex, IconButton } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { RegisterForm } from "./components/RegisterForm";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center height="100vh" width="100%vw" bg="gray.100">
        <RegisterForm />
      </Center>
    </ChakraProvider>
  );
}

export default App;
