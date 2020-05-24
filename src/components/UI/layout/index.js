import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import TbSuperior from './toolbarUp';

const toolbarHeight = '48px';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        height: `calc(100vh - ${toolbarHeight} * 2)`,
    },
    toolbarUp:{
        minHeight: toolbarHeight,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    main:{
        height: "100%",
    },
    appBar:{
        boxShadow: 'none'
    }
}));

export default function DenseAppBar({...props}) {
    const classes = useStyles();
    const { children } = props;

    const [openSide, setOpenSideBar] = useState(false);
    const { toolbarUp, main, root, appBar } = classes;

    const handleSideBar = () => (setOpenSideBar(!openSide))

    return (
        <div className={root}>
            <AppBar className={appBar} position="fixed">
                <TbSuperior handleSideBar={handleSideBar} openSide={openSide} className={toolbarUp}/>
            </AppBar>
            <Toolbar className={toolbarUp} variant="dense"/>
            <main className={main}>
                {children}
            </main>
        </div>
    );
}