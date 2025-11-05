import { createContext, useState } from "react";
import { Words } from "../components/DB";

interface IProps {
  words: string[];
  conter: number;
}

export const Logic = createContext<IProps | undefined>(undefined);
const words = Words;

export function LogicProvider({ children }: { children: React.ReactNode }) {
  const [conter, setConter] = useState(0);

  const val = {
    words,
    conter,
  };

  return (
    <>
      <Logic.Provider value={val}>{children}</Logic.Provider>
    </>
  );
}
