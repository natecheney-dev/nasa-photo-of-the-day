//5mkXZKyCbM2leKCD6iIhpwhYVlj2r1UqaPrnTIQE
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import Second from './Second';
import Loading from './Loading';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;

  .title h1{
    border:1px solid grey;
    position: relative;
    display: inline-block;
    background-color: #1e221e;
    width: auto;
    padding: .7%;
    margin: 1%;
    border-radius: 100%
  }
  .date{
  
    position: relative;
    display: block;
    height: auto;
    width: auto;
    margin:1%;
  }

  .date h2{
    border:1px solid grey;
    position: relative;
    display: inline-block;
    background-color: #1e221e;
    width: auto;
    padding: .7%;
    margin: 0px;
    border-radius: 100%
  }

  .title{
    border:1px solid grey;
    position: relative;
    display: block;
    height: auto;
    width: auto;
  
    
  }

`



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
      {dataNASA.length === 0 && <Loading/>}
      <StyledHeader>
          <div className="title"div>
            <h1>{dataNASA.title}</h1>
          </div>
          <div className="date"div>
            <h2>{dataNASA.date}</h2>
          </div>
      </StyledHeader>
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
