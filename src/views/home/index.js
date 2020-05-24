import React from 'react';

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@Components/UI";

const useStyles = makeStyles((theme) => ({
    text: {
        margin: theme.spacing(2),
    },
    paper:{
        padding: theme.spacing(2),
    }
}));
export default function Home(){
    const classes = useStyles();

    return(
        <>
            <Grid container alignItems="center" justify="center" style={{ height: '100%', textAlign: 'center'}}>
                <Grid item xs={10} sm={5} md={4} lg={3} xl={3}>
                    <Typography variant="h2" className={classes.text} >
                        Olá!
                    </Typography>
                    <Paper className={classes.paper}>
                        <Typography variant="body1">
                            Comece a editar agora mesmo! A aplicação principal fica em App.js, coloque suas rotas e suas views seguindo o padrão descrito no read.me :D ! 
                            Conto com você!
                        </Typography>
                    </Paper>
                    <Typography variant="body1" className={classes.text} color="primary">
                        Feito com ❤ por <a href="http://gmartinu.dev">Gabriel Martinusso</a> e <a href="http://felps.dev">Felipe Correa</a>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}