import './App.css'
import {Words} from "./components/db"
import InputText from "./components/InputText"
import {Text} from "./components/Text"
import Timer from "./components/Timer"
export default function App() {
  return (
    <div>
      <Text words={Words}/>
      <InputText words={Words}/>
      <Timer />
    </div>
  )
}

