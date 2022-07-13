import { Button, Center, HStack, VStack, Toast } from "@chakra-ui/react";
import { useMemo, useCallback, Dispatch, SetStateAction, useState } from "react";
import { InputOptions } from "../models/InputOptions";
import ControlledInput from "./ControlledInput";

interface Props {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export interface InputState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export const RegisterForm = (props: Props) => {
  const { setIsAuthenticated } = props;
  const [submissionAttempted, setSubmissionAttempted] = useState(false);

  const [inputState, setInputValue] = useState<InputState>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const inputOptions = useMemo(
    () => ({
      firstname: new InputOptions("First Name", "text", "firstname"),
      lastname: new InputOptions("Last Name", "text", "lastname", false),
      email: new InputOptions("Enter Email", "text", "email"),
      password: new InputOptions("Enter Password", "password", "password"),
    }),
    []
  );

  const validateForm = useCallback(() => {
    let noEmptyField = true;

    for (const [key, value] of Object.entries(inputState))
      if (
        // @ts-ignore
        inputOptions[key].isRequired
      ) {
        noEmptyField &&= !!value;
      }

    return noEmptyField;
  }, [inputState]);

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

    setSubmissionAttempted(true);

    if (validateForm()) submitFormRequest(inputState, "/register");
  }, [inputState]);

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
            {...inputOptions.firstname}
            value={inputState.firstname}
            setInputValue={setInputValue}
            submissionAttempted={submissionAttempted}
          />
          <ControlledInput
            {...inputOptions.lastname}
            value={inputState.lastname}
            setInputValue={setInputValue}
            submissionAttempted={submissionAttempted}
          />
        </HStack>
        <ControlledInput
          {...inputOptions.email}
          value={inputState.email}
          setInputValue={setInputValue}
          submissionAttempted={submissionAttempted}
        />
        <ControlledInput
          {...inputOptions.password}
          value={inputState.password}
          setInputValue={setInputValue}
          submissionAttempted={submissionAttempted}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Register
        </Button>
      </VStack>
    </Center>
  );
};
