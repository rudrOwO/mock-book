import { useContext, useRef, RefObject } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthContextProps } from "../contexts/AuthContext";

export const useAuthentication = () => {
  return useContext(AuthContext) as AuthContextProps;
};

export const useScroll = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);
  const scrollCallback = (options: ScrollToOptions) => {
    elementRef.current?.scrollTo(options);
  };

  return [elementRef, scrollCallback] as [RefObject<T>, (arg: ScrollToOptions) => void];
};
