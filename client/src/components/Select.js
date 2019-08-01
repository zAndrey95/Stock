import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const SimpleSelect = ({value, name, handleChange, values}) => {
    const classes = useStyles();
    const items = values.map((value, key) => {
        return (
            <MenuItem value={key}>{value}</MenuItem>
        )
    });
    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <Select
                    value={value}
                    onChange={handleChange}
                    name={name}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="" disabled>
                        Выбрать
                    </MenuItem>
                    {items}
                </Select>
                <FormHelperText>Склад</FormHelperText>
            </FormControl>
        </form>
    );
};