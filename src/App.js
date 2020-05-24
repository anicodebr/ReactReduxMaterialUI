import React, { useContext, useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Provider, useSelector } from "react-redux";
import { light as ThemeLight } from "@Utils";
import { store } from "Redux@Helpers";
import { Dialog, Layout } from "@Components/UI";
import { LoginPage, HomePage } from './views';

const useStyles = makeStyles((theme) => ({
  globalStyle: {
    backgroundColor: theme.palette.background.default,
    transition: "all 0.25s linear",
    minHeight: "100%",
  },
}));

const AppConstantsDefault = {
  setTheme: null,
  currentTheme: "light",
  version: "0.0.1", //Para cada commit, o terceiro número sobe 1,
  //para cada release o segundo número sobe 1
  //Para cada versão oficial lançada, o primeiro número sobe 1
  //Quando o número a esquerda sobe, os demais ficam 0, ex: 0.2.12 -> 0.3.0
  header: {
    currentTitle: "Inicio",
  },
  user: {
    name: "",
  },
};

export const AppContext = React.createContext(AppConstantsDefault);

function MainContainer(props){
  const match = useRouteMatch();
  return(
    <Layout>
      <Switch>
        <Route exact path={`${match.url}`} component={HomePage} />
      </Switch>
    </Layout>
  )
}

function AppContainer(props) {
  const classes = useStyles();
  const { _message } = useSelector((state) => state.info.alert);
  const [dialog, setDialog] = useState(false);
  const [message, setMessage] = useState("");

  function openDialog(mensagem) {
    setMessage(mensagem);
    setDialog(true);
  }

  useEffect(() => {
    if (_message && _message.isDialog) {
      openDialog(_message.message);
    }
  }, [_message]);
  
  return (
    <div className={classes.globalStyle}>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/app" exact component={MainContainer} />
        </Switch>
      </Router>
      <Dialog message={message.message} title={message.title} open={dialog} setOpen={setDialog} />
    </div>
  );
}

export default function App(props) {
  const appConstants = useContext(AppContext);
  
  useEffect(() => {
    document.title = `v${appConstants.version}`;
  }, [appConstants.version]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={ThemeLight}>
        <AppContext.Provider value={appConstants}>
          <AppContainer />
        </AppContext.Provider>
      </ThemeProvider>
    </Provider>
  );
}