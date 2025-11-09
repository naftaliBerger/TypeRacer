import { useRef, useEffect, useContext } from "react";
import { Logic } from "../Context/Provider";

export default function Timer() {
  const context = useContext(Logic);
  if (!context) {
    throw Error("Context missing");
  }
  const { setActive, Active, setTime, seconds, time, conter, words,inputRef } = context;
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (Active) {
      inputRef.current?.focus();
    }
  }, [Active]);

  function start() {
    if (!Active) {
      timerRef.current = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
      setActive(true);
      inputRef.current?.focus();
    }
  }

  function stop() {
    clearInterval(timerRef.current!);
    setActive(false);
  }
  function clear() {
    window.location.reload();
    clearInterval(timerRef.current!);
    setActive(false);
  }
  useEffect(() => {
    if (Active == false) {
      stop();
    }
  }, [Active]);
  const minutes = Math.floor(time / 60000);
  const milliseconds = Math.floor((time % 1000) / 10) % 100;
  return (
    <div>
      <button disabled={conter == words.length} onClick={start}>
        Start timer
      </button>
      <h3>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </h3>
      <button onClick={stop}>Stop timer</button>
      <button onClick={clear}>Play again</button>
    </div>
  );
}
