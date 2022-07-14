import { ChakraProvider, theme, Center } from "@chakra-ui/react";
import { useAuthentication } from "./utils/hooks";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";

function App() {
  const { isAuthenticated } = useAuthentication();

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Center height="100vh" width="100vw" bg="gray.100">
        {isAuthenticated ? <HomePage /> : <AuthPage />}
      </Center>
    </ChakraProvider>
  );
}

export default App;
