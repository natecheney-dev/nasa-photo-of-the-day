import React, { useState, useEffect } from "react";
import "./App.css";



function Second(props) {
    
    const {information, imgURL} = props
    
    
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