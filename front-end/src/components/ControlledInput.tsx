import { Dispatch, SetStateAction, useCallback, forwardRef, ChangeEvent } from "react";
import { Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { InputOptions } from "../models/InputOptions";

interface Props extends InputOptions {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const ControlledInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, setValue, label, type, name, isRequired } = props;
  const showError = value === "" && isRequired;

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );

  return (
    <FormControl isRequired={isRequired}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        name={name}
        type={type}
        ref={ref}
        id={name}
        value={value}
        onChange={handleInputChange}
      />
      {showError ? <FormErrorMessage>This field is required</FormErrorMessage> : null}
    </FormControl>
  );
});
