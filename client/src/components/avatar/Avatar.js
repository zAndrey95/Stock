import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
        width: '100px',
        height: '100px',
    },
});

export const LetterAvatars = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center">
            <Avatar className={classes.avatar}>OP</Avatar>
        </Grid>
    );
};