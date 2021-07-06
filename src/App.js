import React from "react";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="App">
        <h1>Weather App</h1>
        <Search />
        <footer>
          <p>
            Coded by{" "}
            <a
              href="https://github.com/nily-fri?tab=repositories"
              target="_blank"
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