import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert('You clicked me!');
    setCount(count + 1);
  }

    return (
      // <button>I'm a button</button>
      <button onClick={handleClick}>
      Clicked {count} times
    </button>
    );
  }

 export default  MyButton;

