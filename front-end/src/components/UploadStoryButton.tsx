import { Button, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { RiImageAddFill, RiUpload2Fill } from "react-icons/ri";

interface Props {
  onClick: () => void;
}

export const UploadStoryButton = (props: Props) => {
  const { onClick: handleClick } = props;

  return (
    <Button
      position="absolute"
      height="60px"
      left={["75%", "75%", "80%"]}
      top="80vh"
      colorScheme="blue"
      borderRadius="xl"
      size="lg"
      onClick={handleClick}
    >
      <RiImageAddFill fontSize="30px" />
      <Text display={["none", "none", "inline"]} fontSize="xl" ml="15px" mt="5px">
        Post Story
      </Text>
    </Button>
  );
};
