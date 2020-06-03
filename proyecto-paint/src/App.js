import React, { useState, useEffect } from "react";
import './App.css';
import Paint  from './components/Paint/Paint';
import Grid from './components/Grid/Grid';

function App() {
  const [colors, setColors] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  
  let a

  let elem = document.querySelector('.container');
  
  function brushColor(e){
    a = e.target.style.backgroundColor;
  }

  function setBackGround(e){
    e.target.style.backgroundColor = a;
    const onChange = event =>{
      localStorage.setItem(event.target.value)
    }
  }

  function PrintPaint(){
    if(document.getElementById('container2') != null){
      let deleteObj = document.getElementById('container2');
      deleteObj.remove();
    }
    if(document.getElementById('containerPrint') != null){
      let removeObj = document.getElementById('containerPrint');
      removeObj.remove();
    } 
    let clone = elem.cloneNode(true);
    clone.id = 'container2';
    clone.removeAttribute("draggable");
    let paste = elem.after(clone);
    return(
      paste
    )
  }

  window.onload=GetAListOfColors;
  
  function resetPalette(){
    let canvas = [];
    //for (let i = 0; i < 100; i++) {
      canvas = document.querySelectorAll('.gridButton')
    //}
    for (let i = 0; i < 100; i++) {
      canvas[i].setAttribute("style", "background: #FFF")
    }
  }
  
  const onChange = event =>{
    localStorage.setItem(event.target.value)
  }
  
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
    <Grid 
      setBackGround={setBackGround}
      />
  </div>
)
}

export default App;
