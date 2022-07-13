import { Button, Center, HStack, VStack } from "@chakra-ui/react";
import { useMemo, useState, useCallback, Dispatch, SetStateAction } from "react";
import { useStateArray } from "../utils/hooks";
import { InputOptions } from "../models/InputOptions";
import { ControlledInput } from "./ControlledInput";

interface Props {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const RegisterForm = (props: Props) => {
  const { setIsAuthenticated } = props;
  const stateArray = useStateArray(4);
  const inputOptions = useMemo<InputOptions[]>(
    () => [
      new InputOptions("First Name", "text", "firstname"),
      new InputOptions("Last Name", "text", "lastname", false),
      new InputOptions("Enter Email", "text", "email"),
      new InputOptions("Enter Password", "password", "password"),
    ],
    []
  );

  const validateForm = useCallback(() => {
    return true;
  }, []);

  const submitFormRequest = useCallback((body: any, route: string) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`${import.meta.env.VITE_SERVER_URL}${route}`, options)
      .then(response => response.json())
      .then(response => {
        setIsAuthenticated(true);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = useCallback(() => {
    // make body here
    if (validateForm())
      submitFormRequest(
        {
          yo: "yooo",
        },
        "/register"
      );
  }, []);

  return (
    <Center
      bg="white"
      padding="2%"
      width={["90%", "80%", "60%"]}
      height="auto"
      shadow="xl"
      borderRadius="lg"
    >
      <VStack spacing={5} width={["90%", "80%", "75%"]}>
        <HStack spacing={5} width="100%">
          <ControlledInput
            {...inputOptions[0]}
            value={stateArray[0][0]}
            setValue={stateArray[0][1]}
          />
          <ControlledInput
            {...inputOptions[1]}
            value={stateArray[1][0]}
            setValue={stateArray[1][1]}
          />
        </HStack>
        <ControlledInput
          {...inputOptions[2]}
          value={stateArray[2][0]}
          setValue={stateArray[2][1]}
        />
        <ControlledInput
          {...inputOptions[3]}
          value={stateArray[3][0]}
          setValue={stateArray[3][1]}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Register
        </Button>
      </VStack>
    </Center>
  );
};
