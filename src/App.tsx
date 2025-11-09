import "./App.css";
import InputText from "./components/InputText";
import { Text } from "./components/Text";
import Timer from "./components/Timer";
import HighscoreTable from "./components/HighscoreTable";
import { LogicProvider } from "./Context/Provider";
export default function App() {
  return (
    <div>
      <LogicProvider>
        <Text />
        <InputText />
        <Timer />
        <HighscoreTable />
      </LogicProvider>
    </div>
  );
}
