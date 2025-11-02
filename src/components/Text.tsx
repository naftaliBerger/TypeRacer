interface IText {
  words: string[];
}

export function Text({ words }: IText) {
  return (
    <div>
      <h1 className="title">Type racer</h1>
      <div className="words">
        {words.map((word: string, i: number) => (
          <h4 className="word" key={i}>{word}</h4>
        ))}
      </div>
    </div>
  );
}
