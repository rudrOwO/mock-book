import { Dispatch, useCallback, ChangeEvent, memo } from "react";
import { Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { InputOptions } from "../models/InputOptions";
import { ReducerAction } from "./RegisterForm";

interface Props extends InputOptions {
  value: string;
  dispatch: Dispatch<ReducerAction>;
}

const ControlledInput = (props: Props) => {
  const { value, dispatch, label, type, name, isRequired } = props;
  const showError = value === "" && isRequired;

  console.log(`${name} is re-rendered`);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({
        property: name,
        value: e.target.value,
      }),
    []
  );

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
