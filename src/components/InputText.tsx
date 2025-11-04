import { useRef, useState } from "react";

interface Props {
  words: string[];
  isActive: boolean;
  conter:number;
  setConter : () => void;
  setActive: (bool : boolean) => void;
  gameOver: (bool : boolean) => void;
}

export default function InputText({ words,isActive ,conter,setConter,setActive,gameOver}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [correct, setCorrect] = useState("");
  function Testing(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputRef.current?.value === words[conter]) {
        setCorrect(""); 
        inputRef.current.value = "";
        setConter();
      }

      else {
        setCorrect("try again !!");
      }
      
      if(conter == words.length - 1){
        setActive(false)
        gameOver(true);
        setCorrect("🎉 Excellent!! game over 🎉")
      }
    }
  }

  return (
    <div>
      <input
      className="input"
        ref={inputRef}
        type="text"
        placeholder="enter your answer"
        onKeyDown={Testing}
        disabled={!isActive}
      />
      <h2>{correct}</h2>
    </div>
  );
}
