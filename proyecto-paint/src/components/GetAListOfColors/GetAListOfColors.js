import React from 'react';
import PropTypes from 'prop-types';
import './GetAListOfColors.css';

function GetAListOfColors(props){
  /*const [colors, setColors] = React.useState([]);
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);
  */
  props('loading');
  fetch('http://api.noopschallenge.com/hexbot?count=10').then(
    (response) => {
      if(!response.ok) {
        throw new Error(`Network response was not ok, status code: ${response.status}`);
      }
      return response.json();
    }
  ).then(
    data => {
      props.setStatus('resolved');
      props.setColors(data.colors);
    }
  ).catch(
    error => {
      props.setStatus('rejected');
      props.setError(error.message);
      console.error('There has been a problem with your fetch operation;', error)
    }
  );
}

export default GetAListOfColors;