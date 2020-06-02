import React, { useState, useEffect } from "react";
import './App.css';
//import GetAListOfColors from './components/GetAListOfColors/GetAListOfColors'
import Paint  from './components/Paint/Paint';

function App() {
  const [colors, setColors] = React.useState([]);
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);
      
  let a = [];

  let elem = document.querySelector('.container');
  function brushColor(e){
    a = e.background;
    console.log(a);
  }

  function setBackGround(e){
    e.target.style.background = a;
  }
  //function Gridiando(){
    let grids =[];
    let subGrids = [];
    for (let i = 0; i < 100; i++){
    grids[i] = <button key={i} style={{backgroundColor: "rgb(255,255,255)"}}
    draggable="true"
    onClick={setBackGround}
    onDragOver={setBackGround}
    ></button>;
    }
    for (let i = 0; i < 100; i++){
      subGrids[i] = <button key={i} style={{backgroundColor: "rgb(255,255,255)"}}
                    ></button>;
    }
    //()();
    //return(
      /*<div className="paintContainer">
      <ul className= "container">
        {grids.map(item=> {
          return(
            item
          )
        })}
      </ul>
      <ul id= "containerPrint">
        {subGrids.map(item=> {
          return(
            item
          )
        })}
      </ul>
    </div>*/
    //)
  //}
/*
  function Paint() {
    return(
    <div className="colorPalette">
      {colors.map(item => {
        return(
          <button 
            key={item.value}
            className="colorButton"
            style={{backgroundColor: item.value}}
            onClick= {brushColor}
          >                   
          </button>
        )
      })}            
    </div>
    )
  };*/

 

  function PrintPaint(){
    //console.log(grids)
    //console.log(document.getElementById('container2'));
    if(document.getElementById('container2') != null){
      let deleteObj = document.getElementById('container2');
      deleteObj.remove();
    }
    //let contObj = document.getElementById('paintContainer');
    if(document.getElementById('containerPrint') != null){
      let removeObj = document.getElementById('containerPrint');
      removeObj.remove();
    }
    //console.log(document.getElementById('newPalette').onclick)    
    let clone = elem.cloneNode(true);
    clone.id = 'container2';
    clone.removeAttribute("draggable");
    let paste = elem.after(clone);
    return(
      paste
    )
  }
  //window.onload=Paint();
  function resetPalette(){
    /*console.log('container')
    /*if(document.querySelector('.container') != null){
      let removeObj = document.querySelector('.container');
      removeObj.remove();
    }
    let subObj = document.getElementsByClassName('container')
    //let resetObj = grids
    return(
      elem
    )*/
  }

  useEffect(() => {
    setStatus('loading');
    fetch('http://api.noopschallenge.com/hexbot?count=10').then(
      (response) => {
        if(!response.ok) {
          throw new Error(`Network response was not ok, status code: ${response.status}`);
        }
        return response.json();
      }
    ).then(
      data => {
        setStatus('resolved');
        setColors(data.colors);
      }
    ).catch(
      error => {
        setStatus('rejected');
        setError(error.message);
        console.error('There has been a problem with your fetch operation;', error)
      }
    );
  
  }, []);

  
  function GetAListOfColors(){
    setStatus('loading');
    fetch('http://api.noopschallenge.com/hexbot?count=10').then(
      (response) => {
        if(!response.ok) {
          throw new Error(`Network response was not ok, status code: ${response.status}`);
        }
        return response.json();
      }
    ).then(
      data => {
        setStatus('resolved');
        setColors(data.colors);
      }
    ).catch(
      error => {
        setStatus('rejected');
        setError(error.message);
        console.error('There has been a problem with your fetch operation;', error)
      }
    );
  }


return(
  <div className="Main" style={{ backgroundColor: 'grey' }} >
    
    <div className= "containerMain">
      <button 
        className="settingButton"
        id="newPalette"
        style={{backgroundColor: '#5ABCF3'}}
        onClick= {GetAListOfColors}
        //onClick={Gridiando}
      >
      New palette
      </button>
      <button
          className="settingButton"
          onClick={PrintPaint}
          style={{backgroundColor: '#5ABCF3'}}
      >Guardar
      </button>
      <button
          className="settingButton"
          onClick={resetPalette}
          style={{backgroundColor: '#5ABCF3'}}
      >Reset
      </button>
      <div className="colorPalette">
        <Paint 
          colors={colors}
          brushColor={brushColor}
          />
      </div>
    </div>
    <div className="paintContainer">
      <ul className= "container">
        {grids.map(item=> {
          return(
            item
          )
        })}
      </ul>
      <ul id= "containerPrint">
        {subGrids.map(item=> {
          return(
            item
          )
        })}
      </ul>
    </div>
  </div>
)
}

export default App;
