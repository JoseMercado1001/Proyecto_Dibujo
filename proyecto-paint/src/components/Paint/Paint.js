import React from 'react';
import PropTypes from 'prop-types';
import './Paint.css';



const Paint = (props) => (
  //let newColors = this.props.colors;
      <div>
        <div className="colorPalette">
          {props.colors.map(item => {
            console.log(props.colors);
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