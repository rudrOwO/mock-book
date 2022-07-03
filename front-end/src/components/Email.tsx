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
  setShowError?: Dispatch<SetStateAction<boolean>>;
}

export const Email = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { showError, setShowError } = props;
  const [input, setInput] = useState("");

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value),
    []
  );

  return (
    <FormControl isInvalid={showError}>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input ref={ref} id="email" type="email" value={input} onChange={handleInputChange} />
      {!showError ? (
        <FormHelperText>Your email address is required for registration</FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  );
});
