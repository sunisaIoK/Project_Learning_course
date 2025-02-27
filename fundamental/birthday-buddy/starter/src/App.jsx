import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>Birthday Today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}
export default App;
