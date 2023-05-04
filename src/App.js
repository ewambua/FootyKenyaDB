import React,{useState, useEffect} from "react";
import './App.css';
import { FaFutbol } from "react-icons/fa";


function App() {
  const [data, setData] = useState([])
  const [appClass, setAppClass] = useState(true)

  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Kenyan%20Premier%20League')
      .then((response) => response.json())
      .then((data)=>setData(data));
  }, []);

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
          <FaFutbol/> FootyKenyaDB
        </h1>
        <button className="theme" onClick={handleClick}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default App;
