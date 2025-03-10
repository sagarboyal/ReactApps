import React, { useState } from 'react';
import './App.css';

function App(){
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#000000', '#ffffff'];

    const changeBackgroudColor = (color) => {
        setBackgroundColor(color);
    }

    return (
        <div className="App" style={{backgroundColor: backgroundColor}}>
            <h1>Color Picker</h1>
            <div className='color-palette'>
                {colors.map((color, index) => (
                 <div className='color-box' 
                    key={index} 
                    onClick={() => changeBackgroudColor(color)}
                    style={{backgroundColor: color}}></div>      
                ))}
            </div>
            <div className='selected-color'>
                <input type="color" value={backgroundColor} 
                    onChange={(e) => changeBackgroudColor(e.target.value)}/>
            </div>
        </div>
    )
}

export default App;