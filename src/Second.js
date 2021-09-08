import React, { useState, useEffect } from "react";
import "./App.css";



function Second(props) {
    console.log('second');
    const {information, imgURL} = props
    console.log(information);
    console.log(imgURL);
    
    return (
      <div className="Second">
        <div className="left-pic">
            <img src={imgURL} alt="NASA Photo" />
        </div>

        <div className="right-info">
            <p>{information}</p>
        </div>
      </div>
    );
  }

export default Second;