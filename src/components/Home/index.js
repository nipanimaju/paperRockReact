import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'
import DataService from "../../services/services";
import revrock1 from "../../assets/revrock.png"
import rock1 from "../../assets/rock.png"
import paper from "../../assets/paper.gif"
import rock from "../../assets/rock.gif"
import scissors from "../../assets/scissors.gif"
import revrock from "../../assets/revrock.gif"
import revscissors from "../../assets/revscissors.gif"
import revpaper from "../../assets/revpaper.gif"
import Stats from "./Stats"
import Weapon from "./Weapon"
import Progress from 'react-progress';
import {Link} from "react-router-dom";
import './index.css';

let obj = {
  wins: 0,
  loss: 0,
  tie: 0,
  games: 0
}

const Home = () => {
  const [player, setPlayer] = useState("")
  const [comp, setComp] = useState("")
  const [move, setMove] = useState(false)
  const [secret, setSecret] = useState("")
  const [life, setLife] = useState(99)
  const [name, setName] = useState("")

  useEffect(() => {
    getData()
    let check = () => {
      if (life <= 0){
       DataService.update(secret, {
         loss: obj.loss,
         wins: obj.wins,
         tie: obj.tie, 
         games: obj.games,
         ratio: ((obj.wins/obj.games)*100).toFixed(2)
       })
      }
       }
       check()
  }, [life, secret]);
  const getData = async () => {
    let fetchedData = await DataService.getAll().limitToLast(1).once('value')
      .then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          setSecret(childSnapshot.key)
          setName(childSnapshot.val())
        });
      });
    return fetchedData
  }

  const moveUp = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(-100px, -100px)" }
  });
  const moveUp2 = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(100px, 100px)" }
  });
  const compChoice = () => {
    const choice = ["paper", "scissors", "rock"]
    const random = Math.floor(Math.random() * choice.length);
    setComp(choice[random]);

  }
  const papers = () => {
    if (move !== true) {
      setMove(true)
      setPlayer("paper")
    }
  }
  const scissorss = () => {
    if (move !== true) {
      setMove(true)
      setPlayer("scissors")
    }
  }
  const rocks = () => {
    if (move !== true) {
      setMove(true)
      setPlayer("rock")
    }
  }

  const set = () => {
    setMove(false)
  }
  const imagePlayer = () => {
    if (player === "paper") {
      return <img src={paper} alt="paper" className="image"></img>
    }
    if (player === "rock") {
      return <img src={rock} alt="rock" className="image"></img>
    }
    if (player === "scissors") {
      return <img src={scissors} alt="scissors" className="image"></img>
    }
  }
  const imageComp = () => {
    if (comp === "paper") {
      return <img src={revpaper} alt="paper" className="image"></img>
    }
    if (comp === "rock") {
      return <img src={revrock} alt="rock" className="image"></img>
    }
    if (comp === "scissors") {
      return <img src={revscissors} alt="scissors" className="image"></img>
    }
  }
  const game = () => {
    if ((player === "paper" && comp === "paper") || (player === "rock" && comp === "rock") || (player === "scissors" && comp === "scissors")) {
      obj.tie = obj.tie + 1
      obj.games = obj.games +1
    }
    if ((player === "paper" && comp === "rock") || (player === "scissors" && comp === "paper") || (player === "rock" && comp === "scissors")) {
      obj.wins = obj.wins + 1
      obj.games = obj.games +1
    }
    if ((player === "paper" && comp === "scissors") || (player === "scissors" && comp === "rock") || (player === "rock" && comp === "paper")) {
      obj.loss = obj.loss + 1
      obj.games = obj.games +1
      if ((life - dmg()) < 0) {
        setLife(-1)
      }else{
      setLife(life - dmg())}
    }
  }
const endGame = () => {
  obj = {
    wins: 0,
    loss: 0,
    tie: 0,
    games: 0
  }
  return obj
}
  const dmg = () => {
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
  }
  const gamePlay = life > 0 ? null : ( <div className="loss">
    <p className="lossText">GAME OVER!</p>
    <div className="endStats">
        g: <span className="statsString">{obj.games}</span>
        w: <span className="statsString">{obj.wins}</span>
        l: <span className="statsString">{obj.loss}</span>
        t: <span className="statsString">{obj.tie}</span>
        %: <span className="statsString">{((obj.wins/obj.games)*100).toFixed(2)}</span>
      </div>
      <Link to={"/"}>
    <button className="btn" onClick={()=> endGame()}>Play again</button>
    </Link>
  </div> )
return (
    <div className="gamePlay">
      {gamePlay}
      <div className="comp">
        <div className="compBar">

        </div>
        <animated.div className="compWeapon" style={moveUp2}>
          {!move ? <img src={revrock1} alt="rock" className="image"></img> : imageComp()}
        </animated.div>
      </div>
      <div className="player">
        <animated.div className="playerWeapon" style={moveUp}>
          {!move ? <img src={rock1} alt="rock" className="image"></img> : imagePlayer()}
        </animated.div>
        <div className="playerBar">
          <p className="name">{name.name} <span className="life">{life + 1}/100</span></p>
          <Progress percent={life}
            style={{ display: "flex", borderBottom: "6px inset rgba(0,0,0,.5)", marginTop: "-10px", top: "auto", left: "auto", position: "relative" }}
            color={"#881400"}
            height={10} />
        </div>
      </div>
      <Weapon
        set={set}
        game={game}
        rocks={rocks}
        scissorss={scissorss}
        papers={papers}
        compChoice={compChoice}
        move={move}
      />
        <Stats
          player={player}
          obj={obj}
        />
    </div>)
};

export default Home;