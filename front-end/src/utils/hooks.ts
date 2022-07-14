import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthContextProps } from "../contexts/AuthContext";

export const useAuthentication = () => {
  return useContext(AuthContext) as AuthContextProps;
};
