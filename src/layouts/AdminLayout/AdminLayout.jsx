import React from 'react'

export function AdminLayout( props ){
    const { children } = props;
    return (
        <>  
            <h2>AdminLayout</h2>
            { children }
        </>
    )
}
