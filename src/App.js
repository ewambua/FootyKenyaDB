import React,{useState, useEffect} from "react";
import './App.css';
import { FaRoute } from "react-icons/fa";


function App() {
  const [appClass, setAppClass] = useState(true)

  const handleClick = () => {
    if (appClass === 'light') {
    setAppClass('dark');
    } else {
    setAppClass('light');
    }
  };
  useEffect(() => {
    document.body.className = appClass;
    }, [appClass]);

  return (
    <div className={`App ${appClass}`}>
      <div className='title'>
        <h1>
          <FaRoute/>The Traveler
        </h1>
        <button className="theme" onClick={handleClick}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default App;
