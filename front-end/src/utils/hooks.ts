import { useState } from "react";

export const useStateArray = (elementCount: number) => {
  const stateArray = [useState<string>("")];

  for (let i = 0; i < elementCount; ++i) {
    stateArray[i] = useState("");
  }

  return stateArray;
};
