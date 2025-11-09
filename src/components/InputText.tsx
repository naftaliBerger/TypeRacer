import { useContext,useState } from "react";
import { Logic } from "../Context/Provider";

export default function InputText() {
  const context = useContext(Logic);
  if (!context) {
    throw Error("dfgdfh");
  }
  const { words, conter, setCounter, setGameOver, setActive, Active ,inputRef} = context;
  const [correct, setCorrect] = useState("");
  function Testing(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputRef.current?.value === words[conter]) {
        setCorrect("");
        inputRef.current.value = "";
        setCounter();
      } else {
        setCorrect("try again !!");
        
      }

      if (conter == words.length - 1) {
        setActive(false);
        setGameOver(true);
        setCorrect("🎉 Excellent!! game over 🎉");
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
        disabled={!Active}
      />
      <h2>{correct}</h2>
    </div>
  );
}
