import { useState, useRef} from "react";

interface Props {
  onStart: () => void;
  onStop: () => void;
  onClear: () => void;
}
export default function Timer({ onStart, onStop, onClear }: Props) {
  const active = useRef<boolean>(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  function start() {
    if (!active.current) {
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(() => {
        setTime(Date.now() - (startTimeRef.current ?? 0));
      }, 10);
      onStart();
      active.current = true;
    }
  }

  function stop() {
    clearInterval(timerRef.current!);
    onStop();
    active.current = false;
  }
  function clear() {
    setTime(0);
    clearInterval(timerRef.current!);
    onClear();
    active.current = false;
  }
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor(time / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  return (
    <div>
      <button onClick={start}>start</button>
      <h3> 
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </h3>
      <button onClick={stop}>stop</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}
