import {
  Dispatch,
  useCallback,
  ChangeEvent,
  memo,
  SetStateAction,
} from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { InputOptions } from "../models/InputOptions";

interface Props extends InputOptions {
  value: string;
  autoFocus?: boolean;
  setInputValue: Dispatch<SetStateAction<any>>;
  submissionAttempted: boolean;
}

const ControlledInput = (props: Props) => {
  const {
    value,
    setInputValue,
    label,
    type,
    name,
    isRequired,
    submissionAttempted,
    autoFocus,
  } = props;
  const showError = value === "" && isRequired && submissionAttempted;

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevState: any) => ({
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
        autoFocus={autoFocus}
      />
      <FormErrorMessage>This field is required</FormErrorMessage>
    </FormControl>
  );
};

export default memo(ControlledInput);
