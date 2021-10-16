import Menu from "./components/Menu";
import { useState } from "react";
import data from "./data";

function App() {
  const [meals, setMeals] = useState(data);

  return (
    <main>
      <h1>Our Menu</h1>
      <div></div>
      <Menu meals={meals} />
    </main>
  );
}

export default App;
