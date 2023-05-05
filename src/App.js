import React,{useState, useEffect}  from "react";
import './App.css';
import { FaFutbol } from "react-icons/fa";
import {Switch, Route } from "react-router-dom";
import Teams from "./components/Teams";
import NavBar from "./components/NavBar";
import Standings from "./components/Standings";

function App() {
  const [table, setTable] = useState([])
  const [appClass, setAppClass] = useState(true)
  const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Kenyan%20Premier%20League')
          .then((response) => response.json())
          .then((data)=>setTeams(data.teams));
    }, []);

    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4745&s=2022-2023')
        .then((response) => response.json())
        .then((data)=>setTable(data.table));
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
      <div>
        <NavBar />
        <Switch>
        <Route exact path="/Standings">
            <Standings table={table} />
          </Route>
          <Route path="/teams">
            <Teams teams={teams}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
