import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

function LeftSideBar({...props}) {
    const classes = useStyles();
    const { open, onChange } = props;

    return (
        <>
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={onChange}
                onOpen={onChange}
            >
                <div 
                    className={classes.list}
                    role="presentation"
                    onClick={onChange}
                >

                </div>
          </SwipeableDrawer>
        </>
    );
}

export default LeftSideBar;