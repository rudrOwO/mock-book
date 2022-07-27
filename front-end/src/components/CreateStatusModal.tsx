import {
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateStatusModal = ({ isOpen, onClose }: Props) => {
  const [content, setContent] = useState("");
  const [submissionAttempted, setSubmissionAttempted] = useState(false);
  const showError = content === "" && submissionAttempted;

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    []
  );

  const handlePostSubmission = useCallback(() => {
    setSubmissionAttempted(true);

    if (content) {
      onClose();

      fetch(`${import.meta.env.VITE_SERVER_URL}/status`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          content: content,
        }),
      }).then((_) => {
        setContent("");
        setSubmissionAttempted(false);
      });
    }
  }, [content]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Status</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormControl isInvalid={showError}>
            <chakra.textarea
              rows={5}
              borderRadius="lg"
              fontSize="lg"
              padding="10px"
              width="100%"
              value={content}
              onChange={handleInputChange}
              autoFocus
            />
            <FormErrorMessage>This field is required</FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Button colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handlePostSubmission}>
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
