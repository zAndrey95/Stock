import React from "react";
import { PropTypes as T } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Add from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    icon: {
        cursor: 'pointer',
        marginRight: '10px',
    },
}));

export const Control = ({add, edit, deleted, handleAdd, handleEdit, handleDelete}) => {
    const classes = useStyles();
    return (
        <div>
            {add ? <Tooltip title="Добавить" placement="top"><Add onClick={handleAdd} className={classes.icon}/></Tooltip> : null }
            {edit ? <Tooltip title="Редактировать" placement="top"><Edit onClick={handleEdit} className={classes.icon}/></Tooltip> : null }
            {deleted ? <Tooltip title="Удалить" placement="top"><Delete onClick={handleDelete} className={classes.icon}/></Tooltip> : null }
        </div>
    );
};

Control.propTypes = {
    add: T.bool,
    edit: T.bool,
    deleted: T.bool,
};

Control.defaultProps = {
    add: true,
    edit: true,
    deleted: true,
};