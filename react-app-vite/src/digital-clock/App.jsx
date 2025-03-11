import './App.css';
import React from 'react';


function App(){
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() =>{ 
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const formatTime = () => {
        return time.toLocaleTimeString('en-US', {
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true
        });
    }

  return(
    <div className='clock-container'>
      <div className='clock'>
            {formatTime()}
      </div>
    </div>
  );  
}

export default App; 