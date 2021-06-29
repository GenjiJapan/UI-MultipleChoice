import React from 'react';

import useClock from '../../hooks/useClock';


function Clock(props) {
    const {TimeString} = useClock();
    return (
        <p style={{fontSize: '42px'}}>{TimeString}</p>
    );
}

export default Clock;