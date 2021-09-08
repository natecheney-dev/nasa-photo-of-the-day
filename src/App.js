//5mkXZKyCbM2leKCD6iIhpwhYVlj2r1UqaPrnTIQE
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import Second from './Second';
import Loading from './Loading'



function App() {
  const[dataNASA, setdataNASA] = useState([]);
  const[imgState, setImgState] = useState(null)

  const imgOpenClose = () => {
    setImgState(!imgState)
  }


  useEffect(() => {
    axios.get(BASE_URL)
      .then(res => {
        setdataNASA(res.data)
        console.log(res.data);
      })
      .catch(err => console.error(err));
      return () => {
        console.log("Cleaning up the event listener!")
      }
  }, [])

 
  



  return (
    <div className="App">
      <div className="Header">
        {dataNASA.length === 0 && <Loading/>}
        <h1>{dataNASA.title}</h1>
        <h2>{dataNASA.date}</h2>
      </div>
      <div className="Main">
        {dataNASA.length !== 0 && <button id='toggle_img' onClick={imgOpenClose}>
        {imgState ? "Hide" : "Show"}
        </button>}
        {
          imgState && <Second information = {dataNASA.explanation} imgURL = {dataNASA.hdurl}/>
        }
      </div>
    </div>
  );
}

export default App;
