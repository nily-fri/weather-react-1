import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="App Container">
        <Weather />
        <footer>
          <p>
            Coded by{" "}
            <a
              href="https://github.com/nily-fri?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Nily Friedman
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
