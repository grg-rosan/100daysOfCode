import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>


     <div className = {`container ${theme}`}>
        <span>click to change theme</span>

        <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
          click
        </button>
      </div>
    </>
  );
}

export default App;
