import { useEffect, useState } from "react";
import { ChakraProvider, Box, theme, Center, Flex, IconButton } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center height="100vh" width="100%vw" bg="grey.100">
        <Center bg="white" width={[1, 1, 1 / 2]} height="auto"></Center>
      </Center>
    </ChakraProvider>
  );
}

export default App;
