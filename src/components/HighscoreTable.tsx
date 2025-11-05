interface Props {
  seconds: number;
  GameOver: boolean;
  words:string[];
}
export default function HighscoreTable({ seconds, GameOver,words }: Props) {
  const Calculation = (words.length * 60) / seconds; 
  let HighscoreArry: number[] = [];
  HighscoreArry = JSON.parse(localStorage.getItem("HighscoreArry") || "[]");
  if (GameOver) {
    HighscoreArry.push(Math.floor(Calculation));
    localStorage.setItem("HighscoreArry", JSON.stringify(HighscoreArry));
  }
  const minNumber = Math.min(...HighscoreArry);
  return (
    <div>
      <h3>Your peak : {minNumber ? minNumber : 0}</h3>
    </div>
  );
}
