import React from 'react';
import './index.css';

 
const Stats = (props) => { 
  // const [playerData, setPlayerData] = useState("")
  // useEffect(() => {
  //   const getData = async () => {
  //     let fetchedData = await firebase.ref(`/parosc/${props.secret}`).on("value", function(snapshot) {
  //       setPlayerData(snapshot.val());
  //     }, function (errorObject) {
  //       console.log("The read failed: " + errorObject.code);
  //     });
  //     return fetchedData
  //   }
  //   getData()
  //   return function cleanup() {
  //     firebase.ref(`/parosc/${props.secret}`).off("value")
  // }  
  // }, [props.secret]);


return(
    <div className="playerStats">
      <div className="item">
        {props.player}
      </div>
      <div className="avatar"></div>
      <div className="stats">
        wins: <span className="statsString">{props.obj.wins}<br /></span>
        loss: <span className="statsString">{props.obj.loss}<br /></span>
        tie: <span className="statsString">{props.obj.tie}</span>
      </div>
    </div>)
};
 
export default Stats;