import React, { useState, useEffect } from "react";
import logo from './assets/loading.gif'
import "./App.css";



function Loading() {
    
    
    return (
      <div className="Loading">
        <h2>LOADING...</h2>
        <img src={logo} alt="loading..." />
        <h2>Please wait...</h2>
      </div>
    );
  }

export default Loading;