import React from 'react';
import './Paint.css';

const Paint = (props) => (
  <div className="colorPalette">
    {props.colors.map(item => {
      return(
        <button 
          key={item.value}
          className="colorButton"
          style={{backgroundColor: item.value}}
          onClick={props.brushColor}
        >                   
        </button>
      )
    })}
  </div>            
);

export default Paint;