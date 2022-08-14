import { useEffect, useState } from "react";
import "./App.css";
import { InteractiveCard } from "./components/InteractiveCard";
import bgImage from "./images/bg-main-desktop.png";
function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    // relative bg-white overflow-hidden
    <div className="App content-center">
      SOMETHING
      <div className=" light:bg-gray-500 dark:bg-gray-900">
        <InteractiveCard></InteractiveCard>
      </div>
    </div>
  );
}

export default App;
