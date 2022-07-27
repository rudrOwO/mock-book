import { Flex, chakra } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { useState, useRef, useCallback, useEffect } from "react";
import { UploadStoryButton } from "./UploadStoryButton";
import { useScroll } from "../utils/hooks";
import Story from "./Story";

export const StorySection = () => {
  const [srcList, setSrcList] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [stackRef, scrollTo] = useScroll<HTMLDivElement>();

  const fetchImageSources = useCallback(() => {
    fetch(`${import.meta.env.VITE_SERVER_STORY}/story`, {
      method: "GET",
      credentials: "include",
    })
      .then(response => response.json())
      .then(response => {
        setSrcList(response);
        scrollTo({ left: 0, behavior: "smooth" });
      });
  }, []);

  const handleFileUpload = useCallback(() => {
    const formData = new FormData();
    formData.append("story", inputRef.current!.files![0]);

    fetch(`${import.meta.env.VITE_SERVER_STORY}/story`, {
      method: "POST",
      credentials: "include",
      body: formData,
    }).then(_ => fetchImageSources());
  }, []);

  const handleClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  useEffect(fetchImageSources, []);

  return (
    <Flex marginY="20px" justifyContent="space-evenly" alignItems="center">
      <chakra.form
        display="none"
        ref={formRef}
        method="post"
        encType="multipart/form-data"
      >
        <chakra.input
          ref={inputRef}
          type="file"
          name="story"
          onChange={handleFileUpload}
        />
      </chakra.form>
      <HStack
        ref={stackRef}
        borderRadius="xl"
        background="gray.100"
        overflowX="scroll"
        spacing={3}
        width={["95%", "80%", "80%"]}
      >
        {srcList.map((src, i) => (
          <Story key={i} src={src} />
        ))}
      </HStack>
      <UploadStoryButton onClick={handleClick} />
    </Flex>
  );
};
