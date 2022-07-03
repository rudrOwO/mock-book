import { Button, Center, VStack } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import { useRefArray } from "../utils/useRefArray";
import { ControlledInput } from "./ControlledInput";

interface Props {}

export const RegisterForm = (props: Props) => {
  const inputFieldCount = 3;
  const refArray = useRefArray(inputFieldCount);
  const [errorArray, setErrorArray] = useState(Array(inputFieldCount));

  const handleSubmit = useCallback(() => {
    console.log(refArray[0].current?.value);
  }, [errorArray]);

  return (
    <Center
      bg="white"
      padding="2%"
      width={["90%", "80%", "60%"]}
      height="auto"
      shadow="lg"
      borderRadius="lg"
    >
      <VStack spacing={3}>
        <ControlledInput type="text" label="Email" showError={errorArray[0]} ref={refArray[0]} />
        <Button colorScheme="teal" onClick={handleSubmit}>
          Register
        </Button>
      </VStack>
    </Center>
  );
};
