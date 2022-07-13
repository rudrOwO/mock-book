import { Dispatch, useCallback, ChangeEvent, memo, SetStateAction } from "react";
import { Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { InputOptions } from "../models/InputOptions";
import { InputState } from "./RegisterForm";

interface Props extends InputOptions {
  value: string;
  setInputValue: Dispatch<SetStateAction<InputState>>;
  submissionAttempted: boolean;
}

const ControlledInput = (props: Props) => {
  const { value, setInputValue, label, type, name, isRequired, submissionAttempted } =
    props;
  const showError = value === "" && isRequired && submissionAttempted;

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(prevState => ({
      ...prevState,
      [name]: e.target.value,
    }));
  }, []);

  return (
    <FormControl isInvalid={showError} isRequired={isRequired}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        name={name}
        type={type}
        id={name}
        value={value}
        onChange={handleInputChange}
      />
      <FormErrorMessage>This field is required</FormErrorMessage>
    </FormControl>
  );
};

export default memo(ControlledInput);
