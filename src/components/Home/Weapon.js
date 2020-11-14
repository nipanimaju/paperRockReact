import React from 'react';
import './index.css';
import {useSpring, animated} from 'react-spring'
 
const Weapon = (props) => { 
    const props0 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })
      const props1 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 100
      })
      const props2 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 200
      })
return(
    <div className="weapon" >
      <animated.button disabled={props.move} onClick={() => {props.papers(); props.compChoice(); props.game(); setTimeout(props.set, 2200); } } className="paper" style={props0}></animated.button>
      <animated.button disabled={props.move} onClick={() =>{props.scissorss(); props.compChoice(); props.game(); setTimeout(props.set, 2200);}} className="scissors" style={props1}></animated.button>
      <animated.button disabled={props.move} onClick={() =>{props.rocks(); props.compChoice(); props.game(); setTimeout(props.set, 2200);}} className="rock" style={props2}></animated.button>
    </div>)
};
 
export default Weapon;