import { Spinner, Center } from "@chakra-ui/react";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const LoadingSpinner = ({ size }: Props) => (
  <Center height="90vh">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size={size}
    />
  </Center>
);
