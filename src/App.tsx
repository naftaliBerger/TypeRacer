import { useRef, useState } from 'react'
import './App.css'
import {Words} from "./components/DB"
import InputText from "./components/InputText"
import {Text} from "./components/Text"
import Timer from "./components/Timer"
import HighscoreTable from "./components/HighscoreTable"
export default function App() {
  const [Active,setActive] = useState(false);
  const [conter,setConter] = useState(0);
  const setGameOver = useRef<boolean>(false);
  const [time, setTime] = useState(0);
  const seconds = Math.floor(time / 1000)
  return (
    <div>
      <Text words={Words} conter={conter}/>
      <InputText words={Words} isActive={Active} setActive={setActive} conter={conter} setConter={() =>{setConter(conter + 1)}} gameOver={setGameOver.current}/>
      <Timer onStart={() => setActive(true)} onStop={() => setActive(false)} onClear={() => setActive(false)} active={Active} time={time} setTime={setTime} seconds={seconds}/>
      <HighscoreTable seconds={seconds}/>
    </div>
  )
}

