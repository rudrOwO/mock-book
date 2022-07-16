import { Button, Center, HStack, VStack, useToast } from "@chakra-ui/react";
import { useMemo, useCallback, useState } from "react";
import { InputOptions } from "../models/InputOptions";
import ControlledInput from "./ControlledInput";
import { useAuthentication } from "../utils/hooks";

interface Props {
  type: "register" | "login";
}

interface InputState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export const AuthForm = (props: Props) => {
  const { type: authType } = props;
  const [submissionAttempted, setSubmissionAttempted] = useState(false);
  const { setIsAuthenticated } = useAuthentication();
  const errorToast = useToast();

  const [inputState, setInputValue] = useState<InputState>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const inputOptions = useMemo(
    () => ({
      firstname: new InputOptions(
        "First Name",
        "text",
        "firstname",
        authType === "register"
      ),
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

  const submitFormRequest = useCallback(() => {
    const options = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputState),
    };

    //@ts-ignore
    fetch(`${import.meta.env.VITE_SERVER_URL}/${authType}`, options)
      .then(response => response.json())
      .then(response => {
        if (response.isAuthenticated) {
          setIsAuthenticated(true);
        } else {
          errorToast({
            title: "Error",
            description: response.errorMessage,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      })
      .catch(err => console.error(err));
  }, [inputState]);

  const handleSubmit = useCallback(() => {
    setSubmissionAttempted(true);
    if (validateForm()) submitFormRequest();
  }, [inputState]);

  return (
    <Center width="100%">
      <VStack spacing={5} width={["100%", "80%", "80%"]}>
        {authType === "register" ? (
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
        ) : null}
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
          {authType === "register" ? "Register" : "Login"}
        </Button>
      </VStack>
    </Center>
  );
};
