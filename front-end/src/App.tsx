import { useEffect, useState } from "react";
import { ChakraProvider, Box, theme, Center, Flex, IconButton } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";

function App() {
  const [loading, setLoading] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_URL)
      .then(res => res.text())
      .then(message => {
        setResponseMessage(message);
        setLoading(false);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex pt="5" alignItems="center" direction="column">
        <Box pt="20">{loading ? "Loading" : responseMessage}</Box>
        <ColorModeSwitcher />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
