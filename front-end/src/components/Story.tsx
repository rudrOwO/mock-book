import { Image } from "@chakra-ui/react";

interface Props {
  src: string;
}

export const Story = ({ src }: Props) => (
  <Image height="15vh" fit="contain" align="center" borderRadius="lg" src={src} />
);
