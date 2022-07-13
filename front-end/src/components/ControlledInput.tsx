import { Dispatch, useCallback, ChangeEvent, memo, SetStateAction } from "react";
import { Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { InputOptions } from "../models/InputOptions";
import { InputState } from "./RegisterForm";

interface Props extends InputOptions {
  value: string;
  setInputValue: Dispatch<SetStateAction<InputState>>;
}

const ControlledInput = (props: Props) => {
  const { value, setInputValue, label, type, name, isRequired } = props;
  const showError = value === "" && isRequired;

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(prevState => ({
      ...prevState,
      [name]: e.target.value,
    }));
  }, []);

  return (
    <FormControl isRequired={isRequired}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        name={name}
        type={type}
        id={name}
        value={value}
        onChange={handleInputChange}
      />
      {showError ? <FormErrorMessage>This field is required</FormErrorMessage> : null}
    </FormControl>
  );
};

export default memo(ControlledInput);
