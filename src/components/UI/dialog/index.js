import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function FvDialog(props) {

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={props.open}
                style={{borderRadius: 0}}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent style={{minWidth: '20em'}}>
                    <DialogContentText id="alert-dialog-description">
                        {props.message && props.message > 1 ? props.message.map((message, key) => {
                            return (
                                <span key={key}>
                                    <b>{message[0]}</b>: {typeof message[1][0] === 'object' ? Object.entries(message[1][0]).map((message) =>
                                        (<span style={{ marginLeft: 10 }}><b>{message[0]}</b>: {message[1][0]}</span>)
                                    )
                                        : message[1][0]}
                                    <br></br>
                                </span>
                            )
                        }): <span style={{ marginLeft: 10 }}><b>{props.message}</b></span>}
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}