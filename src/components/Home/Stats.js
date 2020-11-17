import React from 'react';
import './index.css';

 
const Stats = (props) => { 

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