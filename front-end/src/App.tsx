import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Center,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { AuthForm } from "./components/AuthForm";
import { useAuthentication } from "./utils/hooks";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";

function App() {
  const { isAuthenticated } = useAuthentication();

  return (
    <ChakraProvider theme={theme}>
      <Center height="100vh" width="100vw" bg="gray.100">
        {isAuthenticated ? <HomePage /> : <AuthPage />}
      </Center>
    </ChakraProvider>
  );
}

export default App;
