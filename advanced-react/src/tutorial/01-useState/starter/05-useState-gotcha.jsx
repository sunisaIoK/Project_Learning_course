import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      console.log('clicked the button');
      serValue((currenState)=> {
        return currenState + 1;
      });
    }, 3000);
    };
    // console.log(value);
  return (
    <div>
    <h1>{value}</h1>
    <button type='button' className='btn' onClick={handleClick}>
      increase
    </button>
  </div>
  )
};

export default UseStateGotcha;
