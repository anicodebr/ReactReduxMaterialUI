import React from 'react';

import { Paper } from '@material-ui/core'

export default function Papel({children, ...rest}){
    
    return(
        <Paper {...rest} style={{borderRadius: 0}}>
            {children}
        </Paper>
    )
}