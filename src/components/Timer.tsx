import {useRef, useEffect } from "react";

interface Props {
  onStart: () => void;
  onStop: () => void;
  onClear: () => void;
  active: boolean;
  time : number;
  setTime:React.Dispatch<React.SetStateAction<number>>;
  seconds : number;
}
export default function Timer({ onStart, onStop, onClear, active,time,setTime,seconds }: Props) {
  const timerRef = useRef<number | null>(null);

  function start() {
    if (!active) {
      timerRef.current = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
      onStart();
      active = true;
    }
  }

  function stop() {
    clearInterval(timerRef.current!);
    onStop();
    active = false;
  }
  function clear() {
    // setTime(0);
    window.location.reload()
    clearInterval(timerRef.current!);
    onClear();
    active = false;
  }
  useEffect(() => {
    if (active == false) {
      stop();
    }
  }, [active]);
  const minutes = Math.floor(time / 60000) ;
  seconds = seconds % 60;
  const milliseconds = Math.floor((time % 1000) / 10) % 100;
  return (
    <div>
      <button onClick={start}>Starting a timer</button>
      <h3>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </h3>
      <button onClick={stop}>Stoing a timer</button>
      <button onClick={clear}>Starting a game</button>
    </div>
  );
}
