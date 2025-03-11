import React, { useState } from 'react';
import MouseTracker from './MouseTracker';

function Parent(){
    const [showComponent, setShowComponent] = useState(true);

    const toggleComponent = () => {
        setShowComponent(!showComponent);
    }

    return (
        <div>
            <button onClick={toggleComponent}>
                {showComponent ? 'Untrack' : 'Track'}
            </button>
            {showComponent && <MouseTracker />}
        </div>
    );
}

export default Parent;