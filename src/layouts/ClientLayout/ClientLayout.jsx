import React from 'react';

export function ClientLayout( props ){
    const { children } = props;
    return (
        <>  
        <h2>ClientLayout</h2>
            { children }
        </>
    )
}
