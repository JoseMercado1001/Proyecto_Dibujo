import React, {useState} from 'react';
function Paint() {
  const [status, setStatus] = useState('idle');
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);
  
  let a;
  
  function brushColor (e){
    a = e.target.style.backgroundColor
  }
  
   
  return(
    <div>
      <div className="colorPalette">
        {colors.map(item => {
          return(
            <button 
              key={item.value}
              className="colorButton"
              style={{backgroundColor: item.value}}
              onClick={brushColor}
            >                   
            </button>
          )
        })}            
      </div>
    </div>
  )
}

export default Paint;