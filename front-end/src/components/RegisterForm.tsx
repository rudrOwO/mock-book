import { Center, VStack } from "@chakra-ui/react";
import { useRef, useState, ReactNode, useEffect } from "react";
import { useRefArray } from "../utils/useRefArray";
import { Email } from "./Email";

interface Props {}

export const RegisterForm = (props: Props) => {
  const refArray = useRefArray(4);
  const [errorArray, setErrorArray] = useState([false, false, false, false]);

  return (
    <Center
      bg="white"
      padding="2%"
      width={["90%", "80%", "60%"]}
      height="auto"
      shadow="lg"
      borderRadius="lg"
    >
      <VStack spacing={2}>
        <Email showError={errorArray[0]} ref={refArray[0]} />
      </VStack>
    </Center>
  );
};
