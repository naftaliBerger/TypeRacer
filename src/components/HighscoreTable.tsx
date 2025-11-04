interface Props {
  seconds: number;
  GameOver: boolean;
}
export default function HighscoreTable({ seconds, GameOver }: Props) {
  let HighscoreArry: number[] = [];
  HighscoreArry = JSON.parse(localStorage.getItem("HighscoreArry") || "[]");
  if (GameOver) {
    HighscoreArry.push(seconds);
    localStorage.setItem("HighscoreArry", JSON.stringify(HighscoreArry));
  }
  const maxNumber = Math.min(...HighscoreArry);
  return (
    <div>
      <h3>Your peak : {maxNumber ? maxNumber : 0}</h3>
    </div>
  );
}
