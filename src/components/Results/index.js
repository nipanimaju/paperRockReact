import React, {useEffect, useState} from 'react';
import Nav from "./Nav"
import DataService from "../../services/services";
 
const Result = () => {
  const [playerData, setPlayerData] = useState([])

  useEffect(() => {
    DataService.getAll().orderByChild("games").limitToLast(100).on("value", onDataChange);
  
    return function cleanup() {
      DataService.getAll().orderByChild("games").limitToLast(100).off("value", onDataChange)
  }  
  }, []);

  const onDataChange = (items) => {
    let top = [];
    items.forEach((item) => {
      let data = item.val();
      top.push({
        name: data.name,
        games: data.games,
        wins: data.wins,
        loss: data.loss,
        tie: data.tie,
        ratio: ((data.wins/data.games)*100).toFixed(1),
        key: item.key
      });
    });

    setPlayerData(top.reverse())
  }


  return(
  <div style={{width:"100vw", height:"100vh", display:"flex", flexDirection:"column", alignItems: "center" }}>
    <Nav />
    <div className="mains">
      <h1>TOP 100</h1>
   {playerData.map((data) => {
    return  <div className="endStatss" key={data.key}>
      <span className="statsString" >{data.name}</span>
    g: <span className="statsString">{data.games}</span>
    w: <span className="statsString">{data.wins}</span>
    l: <span className="statsString">{data.loss}</span>
    t: <span className="statsString">{data.tie}</span>
    %: <span className="statsString">{data.ratio}</span>
  </div>
   })}
    </div>
  </div>)
};
 
export default Result;