import React from 'react';

import { Button } from '@material-ui/core';

export default function Btn({label, ...rest}){
    return(
        <Button {...rest}>
            {label}
        </Button>
    )
}