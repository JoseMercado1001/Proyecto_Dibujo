import React from 'react';
import './App.css';
import Paint  from './Paint';

function App() {
 const [colors, setColors] = React.useState([]);
 /* const [status, setStatus] = React.useState('idle');
  
  const [error, setError] = React.useState(null);
  */      
  let a;

  let elem = document.querySelector('.container');

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
  window.onload=Paint();
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

  function getAListOfColors(){
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

    if(status === 'rejected') {
      return (
        <div className="flex flex-col p-5 bg-gray-200">
          <p className="font-bold text-3xl mb-5">
            Oh no! something bad just happened: {error}
          </p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-5 rounded"
            onClick={() => location.reload()}
          >
              Try reloading the page
          </button>
        </div>
      );
    }
  window.onload=();
return(
  <div className="Main" style={{ backgroundColor: 'grey' }} >
    
    <div className= "containerMain">
      <button 
        className="settingButton"
        id="newPalette"
        style={{backgroundColor: '#5ABCF3'}}
        onClick= {Paint}
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
        <Paint />
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
