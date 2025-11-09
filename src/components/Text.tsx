import { useContext } from "react";
import { Logic } from "../Context/Provider";

export function Text() {
  const context = useContext(Logic);
  if (!context) {
    throw Error("dfgdfh");
  }
  const { words, conter } = context;
  return (
    <div>
      <h1 className="title">Type racer</h1>
      <div className="words">
        {words.map((word: string, i: number) => (
          <h4 key={i} className={i === conter ? "wordStayle" : ""}>
            {word}
          </h4>
        ))}
      </div>
    </div>
  );
}
