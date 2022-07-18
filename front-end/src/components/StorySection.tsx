import { Flex, Input } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { useState, useRef, useCallback } from "react";
import { UploadStoryButton } from "./UploadStoryButton";
import { Story } from "./Story";

const url = "../../assets/favicon.svg";

export const StorySection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [srcList, setSrcList] = useState([
    url,
    url,
    url,
    url,
    url,
    url,
    url,
    url,
    url,
    url,
  ]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = useCallback(() => {
    if (inputRef.current?.value) {
      console.log("Call fetch here");
    } else {
      inputRef.current?.click();
    }
  }, []);

  return (
    <Flex marginY="25px" justifyContent={"space-evenly"} alignItems={"center"}>
      <Input ref={inputRef} display="none" type="file" name="story" />
      <HStack
        borderRadius="xl"
        background="gray.200"
        overflowX="scroll"
        spacing={5}
        width={["95%", "80%", "80%"]}
      >
        {srcList.map((src, i) => (
          <Story key={i} src={src} />
        ))}
      </HStack>
      <UploadStoryButton
        isFileUploaded={isFileUploaded}
        setIsFileUploaded={setIsFileUploaded}
        onClick={handleUpload}
      />
    </Flex>
  );
};
