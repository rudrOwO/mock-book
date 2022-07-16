import { useEffect, useState } from "react";
import { ChakraProvider, theme, Center, Spinner } from "@chakra-ui/react";
import { useAuthentication } from "./utils/hooks";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}`, {
      method: "POST",
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
      <Navbar />
      <Center height="100vh" width="100vw" bg="gray.100">
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : isAuthenticated ? (
          <HomePage />
        ) : (
          <AuthPage />
        )}
      </Center>
    </ChakraProvider>
  );
}

export default App;
