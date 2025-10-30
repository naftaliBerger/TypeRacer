import { useRef, useState } from "react";

interface Props {
  words: string[];
}

export default function InputText({ words }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [correct, setCorrect] = useState("");
  const [conter,setConter] = useState(0);
  function Testing(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === " ") {
      if (inputRef.current?.value === words[conter]) {
        setCorrect("correct!!"); 
        inputRef.current.value = "";
        setConter(conter + 1);
      } else {
        setCorrect("try again");
      }
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="enter your answer"
        onKeyDown={Testing}
      />
      <h2>{correct}</h2>
    </div>
  );
}
