import React from 'react';
import PropTypes from 'prop-types';
import './Paint.css';



const Paint = (props) => (
      <div>
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
      </div>
);

export default Paint;