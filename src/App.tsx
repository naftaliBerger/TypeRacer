import { useState } from 'react'
import './App.css'
import {Words} from "./components/DB"
import InputText from "./components/InputText"
import {Text} from "./components/Text"
import Timer from "./components/Timer"
export default function App() {
  const [Active,setActive] = useState(false);
  return (
    <div>
      <Text words={Words}/>
      <InputText words={Words} isActive={Active}/>
      <Timer onStart={() => setActive(true)} onStop={() => setActive(false)} onClear={() => setActive(false)}/>
    </div>
  )
}

