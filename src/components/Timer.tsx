import {useState, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const timerRef = useRef<number | null>(null);
  function start() {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(timerRef.current!);
  }
  function clear(){
    setTime(0);
    clearInterval(timerRef.current!)
  }
  return (
    <div>
      <button onClick={start}>start</button>
      {time}

      <button onClick={stop}>stop</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}
