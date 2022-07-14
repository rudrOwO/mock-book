import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Center,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { RegisterForm } from "./components/RegisterForm";
import { useAuthentication } from "./utils/hooks";

function App() {
  const { isAuthenticated } = useAuthentication();

  return (
    <ChakraProvider theme={theme}>
      <Center height="100vh" width="100vw" bg="gray.100">
        {isAuthenticated ? <Text>Home Page</Text> : <RegisterForm />}
      </Center>
    </ChakraProvider>
  );
}

export default App;
