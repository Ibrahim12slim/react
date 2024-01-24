import { useState } from 'react';
import './App.css';

function App() {
  const [color, setBackgroundColor] = useState("white");

  //instead of implementing a new function to assign the new color we directly used the function of the hook in the button below :)
  return (
    <div className='w-screen h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='text-center p-40' >
        <button onClick={ () => setBackgroundColor('green')}>Green</button>{" "}
        <button onClick={ () => setBackgroundColor('yellow')}>Yellow</button>{" "}
        <button onClick={ () => setBackgroundColor('blue')}>Blue</button>
      </div>
    </div>
  );
}

export default App;
