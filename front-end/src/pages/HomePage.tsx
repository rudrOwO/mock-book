import { Status } from "../models/Status";
import { Center, useDisclosure } from "@chakra-ui/react";
import { CreateStatusButton } from "../components/CreateStatusButton";
import { CreateStatusModal } from "../components/CreateStatusModal";

const list: [Status] = [
  {
    userName: "Dardaul Hoque",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident accusantium rem cupiditate unde ipsam nobis veniam? Eum placeat obcaecati modi nulla sequi, beatae veniam magnam, deserunt doloremque, odit debitis repudiandae!",
  },
];

export const HomePage = () => {
  return <Center>HOME</Center>;
};
