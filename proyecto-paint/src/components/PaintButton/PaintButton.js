import React from 'react';
import './PaintButton.css';

function PaintButton(props){

  let elem = document.querySelector('.container');

  function resetPalette(){
    let canvas = [];
    //for (let i = 0; i < 100; i++) {
      canvas = document.querySelectorAll('.gridButton')
    //}
    for (let i = 0; i < 100; i++) {
      canvas[i].setAttribute("style", "background: #FFF")
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

  return(
    <div className="PaintButton">
      <button 
          className="settingButton"
          id="newPalette"
          onClick= {props.GetAListOfColors}
        >
        Nueva Paleta
        </button>
        <button
            className="settingButton"
            onClick={PrintPaint}
        >Guardar
        </button>
        <button
            className="settingButton"
            onClick={resetPalette}
        >Reset
        </button>
    </div>
  )
};

export default PaintButton;
