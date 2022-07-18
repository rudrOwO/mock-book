import { Button, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { RiImageAddFill, RiUpload2Fill } from "react-icons/ri";

interface Props {
  flex?: number;
  onClick: () => void;
  isFileUploaded: boolean;
  setIsFileUploaded: Dispatch<SetStateAction<boolean>>;
}

export const UploadStoryButton = (props: Props) => {
  const { flex, onClick: handleClick, isFileUploaded, setIsFileUploaded } = props;

  return (
    <Button
      position="absolute"
      height="60px"
      left={["75%", "75%", "80%"]}
      top="80vh"
      colorScheme="blue"
      borderRadius="xl"
      size="lg"
    >
      <RiImageAddFill fontSize="30px" />
      <Text display={["none", "none", "inline"]} fontSize="xl" ml="15px" mt="5px">
        Post Story
      </Text>
    </Button>
  );
};
