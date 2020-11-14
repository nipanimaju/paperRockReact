import React from 'react';
import Nav from "./Nav"
 
const About = () => (
  <div style={{width:"100vw", height:"100vh", overflow: "hidden" }}>
    <Nav />
    <div className="main">
    <div className="text">
      <h2>Paper Scissors Rock v.1.0</h2>
      <p className="mainText">enjoy the game ;)</p>
      <p className="contact">contact me: zuc.pawel@gmail.com</p>
      <p className="github">github: <a href="https://github.com/nipanimaju">click</a> </p>
    </div>
    </div>
  </div>
);
 
export default About;