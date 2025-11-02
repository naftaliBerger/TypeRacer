import { useRef, useState } from "react";

interface Props {
  words: string[];
  isActive: boolean;
}

export default function InputText({ words,isActive }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [correct, setCorrect] = useState("");
  const [conter,setConter] = useState(0);
  function Testing(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === " ") {
      e.preventDefault();
      if (inputRef.current?.value === words[conter]) {
        setCorrect(""); 
        inputRef.current.value = "";
        setConter(conter + 1);
      } else {
        setCorrect("try again !!");
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
