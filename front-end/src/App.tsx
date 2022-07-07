import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Center,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { RegisterForm } from "./components/RegisterForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Center height="100vh" width="100vw" bg="gray.100">
        {isAuthenticated ? (
          <Text>Home Page</Text>
        ) : (
          <RegisterForm setIsAuthenticated={setIsAuthenticated} />
        )}
      </Center>
    </ChakraProvider>
  );
}

export default App;
