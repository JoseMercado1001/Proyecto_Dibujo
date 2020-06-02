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
    e.target.style.background = a;
  }

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

  window.onload=GetAListOfColors;
  
  function resetPalette(){
    let canvas = []
    for (let i = 0; i < 100; i++) {
      canvas[i] = document.getElementsByTagName('.gridButton')[i]
      
    }
    canvas.setAttribute('style', '{background: #FFF}')
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
