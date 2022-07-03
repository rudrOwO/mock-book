import { useRef, MutableRefObject, ReactNode, Children } from "react";

export const useRefArray = (childrenCount: number) => {
  const refArray: MutableRefObject<HTMLInputElement | null>[] = [];

  for (let i = 0; i < childrenCount; ++i) {
    refArray.push(useRef(null));
  }

  return refArray;
};
