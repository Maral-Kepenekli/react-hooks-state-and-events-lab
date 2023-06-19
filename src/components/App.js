import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import "../index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  function darkModeToggle(event) {
    setDarkMode((currentDarkMode) => !currentDarkMode)
  }
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeToggle}>{darkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
