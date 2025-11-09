import { createContext, useRef, useState } from "react";
import type { RefObject } from "react";
import { Words } from "../components/DB";

interface IProps {
  words: string[];
  conter: number;
  setCounter: () => void;
  Active: boolean;
  setActive: (state: boolean) => void;
  GameOver: boolean;
  setGameOver: (state: boolean) => void;
  seconds: number;
  time: number;
  setTime: (state: number | ((prev: number) => number)) => void;
  inputRef:RefObject<HTMLInputElement| null>;
}

export const Logic = createContext<IProps | undefined>(undefined);
const words = Words;

export function LogicProvider({ children }: { children: React.ReactNode }) {
  const [conter, setConter] = useState(0);
  const [Active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [GameOver, setGameOver] = useState<boolean>(false);
  const [time, setTime] = useState(0);
  let seconds = Math.floor(time / 1000) % 60;

  const setCounter = () => {
    setConter((prev) => prev + 1);
  };
  const val = {
    words,
    conter,
    setCounter,
    Active,
    setActive,
    GameOver,
    setGameOver,
    time,
    setTime,
    seconds,
    inputRef
  };

  return (
    <>
      <Logic.Provider value={val}>{children}</Logic.Provider>
    </>
  );
}
