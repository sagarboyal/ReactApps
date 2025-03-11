import'./App.css';
import React, {useState, useEffect} from 'react';

function MouseTracker(){
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handlePosition = (event) => {
            setPosition({x: event.clientX, 
                            y: event.clientY});
        };
        window.addEventListener('mousemove', handlePosition);
        return () => {
            window.removeEventListener('mousemove', handlePosition);
        };
    }, []);

    return (
        <div>
            <h1>Move the mouse around!</h1>
            <p>X: {position.x}, Y: {position.y}</p>
        </div>
    );
}

export default MouseTracker;