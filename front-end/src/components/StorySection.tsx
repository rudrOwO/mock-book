import { Flex, chakra } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { useState, useRef, useCallback, useEffect, ChangeEvent } from "react";
import { UploadStoryButton } from "./UploadStoryButton";
import Story from "./Story";

export const StorySection = () => {
  const [srcList, setSrcList] = useState([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.currentTarget.value) {
  //     handleFileUpload();
  //   } else {
  //     console.log("files NOT here");
  //   }
  // }, []);

  const fetchImageSources = useCallback(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/story`, {
      method: "GET",
      credentials: "include",
    })
      .then(response => response.json())
      .then(response => setSrcList(response));
  }, []);

  const handleFileUpload = useCallback(() => {
    const formData = new FormData();
    formData.append("story", inputRef.current!.files![0]);

    fetch(`${import.meta.env.VITE_SERVER_URL}/story`, {
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
    <Flex marginY="25px" justifyContent={"space-evenly"} alignItems={"center"}>
      <chakra.form
        display="none"
        ref={formRef}
        action={`${import.meta.env.VITE_SERVER_URL}/story`}
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
        borderRadius="xl"
        background="gray.200"
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
