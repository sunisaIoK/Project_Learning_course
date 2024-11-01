import { useState} from 'react';
import { useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('rendered');

  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      
    };
    window.addEventListener('click', someFunc);
    return () => {
      window.removeEventListener('scroll', someFunc);
    }
  }, []);
  return <h2>Hello There</h2>;
};

export default CleanupFunction;
