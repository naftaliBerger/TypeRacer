interface IText {
  words: string[];
  conter:number;
}

export function Text({ words ,conter}: IText) {
  return (
    <div>
      <h1 className="title">Type racer</h1>
      <div className="words">
        {words.map((word: string, i: number) => (
          <h4 key={i} className={i === conter ? "wordStayle" : ""}>{word}</h4>
        ))}
      </div>
    </div>
  );
}
