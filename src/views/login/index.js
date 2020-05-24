import React, { useEffect, useContext, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Grid, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom'

import { PassField, TextField, Button, Paper} from '@Components/UI';
import { authActions } from "Redux@Actions";
import { AppContext } from '../../App';

const useStyles = makeStyles((theme) => ({
    form: {
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    },
    header:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        paddingBottom: 0
    },
    input: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    button: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(3)
    }
}));


export default function LoginPage(){
    //Initial Config
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    // States 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // Contexts sets
    const appConstants = useContext(AppContext);

    // Selectors
    const { loggedIn } = useSelector(state => state.security.auth)

    const handleSubmit = (e) => { 
        e.preventDefault()
        dispatch(authActions.Login({username,password}))
    }

    useEffect(() => {
        if(loggedIn){
            //Fez login
            history.push('/app');
        }
        //eslint-disable-next-line
    }, [loggedIn])


    return(
        <>
            <Grid container alignItems="center" justify="center" style={{ height: '100vh', textAlign: 'center'}}>
                <Grid item xs={9} sm={5} md={3} lg={3} xl={2}>
                <Paper>
                    <Typography className={classes.header} color="primary" variant="h3">
                        <span>LOGIN v{appConstants.version}</span>
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField onChange={(e) => { setUsername(e.target.value) }} className={classes.input} name='username' color='primary' fullWidth variant="standard" label='USUÁRIO' />
                        <PassField onChange={(e) => { setPassword(e.target.value) }} className={classes.input} label="SENHA" name='password'/>
                        <Button type='submit' fullWidth variant='contained' className={classes.button} color='primary' label="LOGIN" />
                    </form>
                </Paper>
                </Grid>
            </Grid>
        </>
    )
}