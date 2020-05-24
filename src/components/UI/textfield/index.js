import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const TF = withStyles(theme => ({
    root: {
        '& .MuiFilledInput-underline:before': {
            borderBottomColor: theme.palette.primary.light,
        },
    },
}))(TextField);

function TextF({ ...props }) {
    return (
        <>
            <TF {...props} />
        </>
    )
}

export default TextF