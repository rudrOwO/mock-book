import { useRef, Ref, ReactNode, Children } from "react";

export const useChildrenRef = (children: ReactNode) => {
  const childrenCount = Children.count(children);
  const refArray: Array<Ref<HTMLInputElement>> = [];

  for (let i = 0; i < childrenCount; ++i) {
    refArray.push(useRef(null));
  }
  return refArray;
};
