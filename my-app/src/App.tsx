import "./App.css";
import { InteractiveCard } from "./components/InteractiveCard";
import bgImage from "./images/bg-main-desktop.png";
function App() {
  return (
    // relative bg-white overflow-hidden
    <div className="App content-center">
      SOMETHING
      <div className=" bg-gray-500">
        <InteractiveCard></InteractiveCard>
      </div>
    </div>
  );
}

export default App;
