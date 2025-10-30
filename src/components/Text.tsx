
interface IText{
    words: string[]
}

export function Text({words}:IText) {

  return (
    <div>
        {words.map((word: string, i: number) => <p key={i}>{word}</p>)}
            
    </div>
  )
}
