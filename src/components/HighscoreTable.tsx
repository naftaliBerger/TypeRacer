import { useContext } from "react";
import { Logic } from "../Context/Provider";

export default function HighscoreTable() {
  const context = useContext(Logic);
  if (!context) {
    throw Error("dfgdfh");
  }
  const { seconds, words, GameOver } = context;
  const Calculation = (words.length * 60) / seconds;
  let HighscoreArry: number[] = [];
  HighscoreArry = JSON.parse(localStorage.getItem("HighscoreArry") || "[]");
  if (GameOver) {
    HighscoreArry.push(Math.floor(Calculation));
    localStorage.setItem("HighscoreArry", JSON.stringify(HighscoreArry));
  }
  const minNumber = Math.max(...HighscoreArry);
  return (
    <div>
      <h3>Your peak : {minNumber ? minNumber : 0}</h3>
    </div>
  );
}
