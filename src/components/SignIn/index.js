import React, { useState } from "react";
import firebase from "../../firebase";
import './index.css';
import logo from '../../assets/logo.png'
import { withRouter } from 'react-router-dom';
import Nav from "./Nav"

var uniqid = require('uniqid');

const SignIn = (props) => {
 const [name, setName] = useState("")
 const [correctLength, setCorrectLength] = useState(true);
 const db = firebase.ref("/parosc");
 
 const onChangeHandler = (e) => {
  setName(e.target.value)
}
const onSubmitHandler = (e) => {
  e.preventDefault();
  if (name.length >= 3 && name.length <= 5) {
    setCorrectLength(true);
    db.child(uniqid()).set({
      name: name,
      wins: 0,
      loss: 0,
      tie: 0,
      ratio: 0
    })
    .then(() => {
      console.log("Created new item successfully!");
    })
    .catch((e) => {
      console.log(e);
    })
    props.history.push('/home')
  } else { // incorrect length
      setCorrectLength(false);
  }
}

 return  (
   <div style={{width:"100vw", height: "100vh", overflow: "hidden"}}>
  <Nav />
  <div className="main">
    <img src={logo} alt="Logo" className="logo" />
    <p className="nameText">Enter your name:</p>
 <form action="" onSubmit={onSubmitHandler} style={{display: "flex", flexDirection: "column", width: "148px"}}>
                <input
                    className="inputText"
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={onChangeHandler}
                    maxLength='5'
                />
                <input type="submit" value="Start" className="inputSubmit" /> 
            </form>
            {correctLength ?
                null : 
                <p style={{fontFamily: "Apple"}}>Please use 3-5 characters</p>
            }
  </div>
  </div>
 )
}

export default withRouter(SignIn);