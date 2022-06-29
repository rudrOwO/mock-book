import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Center,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [loading, setLoading] = useState(true);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(res => res.text())
      .then(message => {
        setResponseMessage(message);
        setLoading(false);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex pt="5" alignItems="center" direction="column">
        <Box pt="20">
          {loading ? 'Loading' : responseMessage}
          <ColorModeSwitcher />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
