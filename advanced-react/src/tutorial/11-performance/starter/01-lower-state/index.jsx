import { useState, useCallback } from "react";
import { data } from "../../../../data";
import List from "./List";
import Form from "./Form";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePeople = useCallback((id) => {
    console.log(people);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }, []);

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePeople} />
    </section>
  );
};
export default LowerState;
