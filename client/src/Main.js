import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { LetterAvatars } from './components/avatar/Avatar';
import { NestedList } from './components/menu/StockMenu';
import { Routes } from './Routes';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '100%',
    },
}));

export const Main = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <LetterAvatars/>
                        <NestedList/>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <Routes/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
