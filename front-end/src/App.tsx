import { useEffect, useState } from "react";
import { ChakraProvider, theme, Center, Flex } from "@chakra-ui/react";
import { useAuthentication } from "./utils/hooks";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { LoadingSpinner } from "./components/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}`, {
      method: "GET",
      credentials: "include",
    })
      .then(response => response.json())
      .then(response => {
        setIsLoading(false);
        setIsAuthenticated(response.isAuthenticated);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex
        flexDir={"column"}
        height="100vh"
        width="100vw"
        overflow="scroll"
        bg="gray.100"
      >
        <Navbar />
        <Center marginY={"3%"}>
          {isLoading ? (
            <LoadingSpinner size="xl" />
          ) : isAuthenticated ? (
            <HomePage />
          ) : (
            <AuthPage />
          )}
        </Center>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
