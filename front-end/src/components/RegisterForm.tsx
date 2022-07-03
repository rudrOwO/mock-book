import { Button, Center, VStack } from "@chakra-ui/react";
import { useState, useCallback, useEffect, Dispatch, SetStateAction } from "react";
import { useRefArray } from "../utils/useRefArray";
import { ControlledInput } from "./ControlledInput";

interface Props {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const RegisterForm = (props: Props) => {
  const inputFieldCount = 3;

  const { setIsAuthenticated } = props;

  const refArray = useRefArray(inputFieldCount);
  const [errorArray, setErrorArray] = useState<boolean[]>(Array(inputFieldCount));

  const handleSubmit = useCallback(() => {
    const newErrorArray = refArray.map(ref => !ref.current?.value);
    setErrorArray(newErrorArray);

    if (newErrorArray.some(isBlank => isBlank)) {
      return;
    }

    const body = JSON.stringify({
      username: refArray[0].current?.value,
      email: refArray[1].current?.value,
      password: refArray[2].current?.value,
    });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };

    fetch(`${import.meta.env.VITE_SERVER_URL}/register`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setIsAuthenticated(true);
      })
      .catch(err => console.error(err));
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
      <VStack spacing={5}>
        <ControlledInput
          type="text"
          label="username"
          showError={errorArray[0]}
          ref={refArray[0]}
        />
        <ControlledInput
          type="text"
          label="email"
          showError={errorArray[1]}
          ref={refArray[1]}
        />
        <ControlledInput
          type="password"
          label="password"
          showError={errorArray[2]}
          ref={refArray[2]}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Register
        </Button>
      </VStack>
    </Center>
  );
};
