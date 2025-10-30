import { createContext , useContext, useState} from "react";

type TimerContextType = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  counter:number
  setCounter:React.Dispatch<React.SetStateAction<number>>
};

interface ThemeProviderProps {
      children: React.ReactNode;
    }



export const context = createContext<TimerContextType | null>(null)

export function TimerProvider(props:ThemeProviderProps){
    const [time,setTime] = useState(0)
    const [isRunning,setIsRunning] = useState(false)
    const [counter,setCounter] = useState(0)

    return <context.Provider value={{time,setTime,isRunning,setIsRunning,counter,setCounter}}>{props.children}</context.Provider>
}

export function useTimer() {
  const timer = useContext(context);
  if (!timer) throw new Error("useTimer must be used within a TimerProvider");
  return timer;
}