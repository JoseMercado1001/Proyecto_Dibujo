import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

function Grid(props){
  let grids =[];
  let subGrids = [];
  for (let i = 0; i < 100; i++){
  grids[i] = <button key={i} style={{backgroundColor: "rgb(255,255,255)"}}
              draggable="true"
              onClick={props.setBackGround}
              onDragOver={props.setBackGround}
              ></button>;
  }
  for (let i = 0; i < 100; i++){
    subGrids[i] = <button key={i} style={{backgroundColor: "rgb(255,255,255)"}}
                ></button>;
  }
  return(
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
  )
};

export default Grid;
