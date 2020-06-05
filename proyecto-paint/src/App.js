import React, { useState, useEffect } from "react";
import './App.css';
import Paint  from './components/Paint/Paint';
import Grid from './components/Grid/Grid';
import PaintButton from './components/PaintButton/PaintButton';

function App() {
  const [colors, setColors] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [value, setValue] = useState(
    localStorage.getItem('backupGridSave') || ''
  );

  useEffect(() => {
    localStorage.setItem('backupGridSave', Grid);}, [Grid]);
  

  let a

  let gridSave
  
  function brushColor(e){
    a = e.target.style.backgroundColor;
  }

  function setBackGround(e){
    e.target.style.backgroundColor = a;
  }

  const saveCanvas = event => setValue(event.target.value);
  
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

  if(status === 'rejected') {
    return (
      <div className="flex flex-col p-5 bg-gray-200">
        <p className="font-bold text-3xl mb-5">
          Oh no! something bad just happened: {error}
        </p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-5 rounded"
          onClick={() => window.reload()}
        >
            Try reloading the page
        </button>
      </div>
    );
  }

  window.onload = GetAListOfColors;

return(
  <div className="Main" style={{ backgroundColor: 'grey' }} >
    <div className= "containerMain">
      <PaintButton 
        GetAListOfColors={GetAListOfColors}
          />
      <Paint 
        colors={colors}
        brushColor={brushColor}
        />
    </div>
    <Grid 
      setBackGround={setBackGround}
      saveCanvas={saveCanvas}
      />
  </div>
)
}

export default App;
