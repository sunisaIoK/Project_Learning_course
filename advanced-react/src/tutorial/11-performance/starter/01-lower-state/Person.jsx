import { useEffect } from 'react';

const Person = ({ name }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default Person;
