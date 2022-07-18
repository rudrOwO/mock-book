import { Button, Center } from "@chakra-ui/react";
import { FormEvent } from "react";

interface Props {
  flex: number;
}

export const StorySection = ({ flex }: Props) => {
  return (
    <Center flex={flex}>
      <form
        action={`${import.meta.env.VITE_SERVER_URL}/story`}
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" name="story" />
        <button type="submit">upload</button>
      </form>
    </Center>
  );
};
