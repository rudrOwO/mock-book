import { Button, Center } from "@chakra-ui/react";
import { FormEvent } from "react";

interface Props {
  flex: number;
}

// import.meta.env.VITE_SERVER_URL

export const StorySection = ({ flex }: Props) => {
  return (
    <Center marginTop={"10px"} flex={flex}>
      <input type="file" name="story" />
    </Center>
  );
};
