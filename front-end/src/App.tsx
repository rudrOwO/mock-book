import { useEffect, useState } from "react";
import { ChakraProvider, theme, Center, Flex } from "@chakra-ui/react";
import { useAuthentication } from "./utils/hooks";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
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
      {isLoading ? (
        <LoadingSpinner size="xl" />
      ) : isAuthenticated ? (
        <HomePage />
      ) : (
        <AuthPage />
      )}
    </ChakraProvider>
  );
}

export default App;
