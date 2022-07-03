import {
  useState,
  useCallback,
  useRef,
  forwardRef,
  ReactNode,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  ChangeEvent,
} from "react";
import {
  Center,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

interface Props {
  showError: boolean;
  label: string;
  type: string;
  setShowError?: Dispatch<SetStateAction<boolean>>;
}

export const ControlledInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { showError, label, type } = props;
  const [input, setInput] = useState("");

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value),
    []
  );

  return (
    <FormControl isInvalid={showError}>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Input
        name={label}
        type={type}
        ref={ref}
        id={label}
        value={input}
        onChange={handleInputChange}
      />
      {showError ? <FormErrorMessage>{`${label} is required`}</FormErrorMessage> : null}
    </FormControl>
  );
});
