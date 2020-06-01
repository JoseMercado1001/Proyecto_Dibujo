import React from 'react';
import PropTypes from 'prop-types';
import './Paint.css';

let newColors = this.props.colors;

const Paint = () => (
      <div>
        <div className="colorPalette">
          {newColors.map(item => {
            return(
              <button 
                key={item.value}
                className="colorButton"
                style={{backgroundColor: item.value}}
                onClick={this.props.brushColor}
              >                   
              </button>
            )
          })}            
        </div>
      </div>
);

export default Paint;