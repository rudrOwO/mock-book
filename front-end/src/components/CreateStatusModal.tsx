import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateStatusModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Post Status</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi quis atque
          odio, eos neque facere aspernatur voluptates perspiciatis non, minus obcaecati
          error. Nostrum nesciunt impedit odit tenetur, laboriosam minus.
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
