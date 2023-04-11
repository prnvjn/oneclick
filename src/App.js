import './App.css';

import {useState, useEffect} from 'react'
function App() {
  const [first, setfirst] = useState(0)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('number'));
    if (items) {
     setfirst(items);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('number', JSON.stringify(first));
    
   
    }
  , [first]);


  const increase = () =>{
    setfirst(first + 1)
   
  
  }
  
  return (
    <div className="App">
     
        <h1>
        LEVEL 1 CHALLENGE
        </h1>
    
    <h2>Chasing the Clicks</h2>

    <span className='number' >{first}</span>
    <button onClick={increase}>Click me</button>



    </div>
  );
}

export default App;
