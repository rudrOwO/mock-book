import { useRef, forwardRef, ReactNode } from "react";
import { Input, FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

export const ValidatedForm = (props: Props) => {
  const { children } = props;

  return { children };
};
