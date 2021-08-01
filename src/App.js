import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import "./Weather.css";

function App() {
  return (
    <div className="App container">
      <div>
        <Weather defaultCity="London" />
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
