import { Image } from "@chakra-ui/react";
import { memo } from "react";

interface Props {
  src: string;
}

const Story = ({ src }: Props) => (
  <Image
    height="20vh"
    fit="contain"
    align="center"
    borderRadius="lg"
    src={`${import.meta.env.VITE_SERVER_URL}/story/${src}`}
  />
);

export default memo(Story);
