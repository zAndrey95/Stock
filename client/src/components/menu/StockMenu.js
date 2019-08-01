import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Store from "@material-ui/icons/Store";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Subtitles from "@material-ui/icons/Subtitles";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Map from "@material-ui/icons/Map";
import Category from "@material-ui/icons/Category";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    iconNested: {
        minWidth: '46px'
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.54)',
        marginRight: 'auto'
    }
}));

export const NestedList = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <Store />
                </ListItemIcon>
                <Link to={'/stock'} className={classes.link}>
                    <ListItemText primary="Склад"/>
                </Link>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.iconNested}>
                            <Subtitles />
                        </ListItemIcon>
                        <ListItemText primary="Производитель"/>
                    </ListItem>

                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.iconNested}>
                            <DirectionsCar />
                        </ListItemIcon>
                        <ListItemText primary="Применимость"/>
                    </ListItem>

                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.iconNested}>
                            <LocalShipping />
                        </ListItemIcon>
                        <ListItemText primary="Поставщик"/>
                    </ListItem>

                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.iconNested}>
                            <Map />
                        </ListItemIcon>
                        <Link to={'/stock/location/'} className={classes.link}>
                            <ListItemText primary="Расположение"/>
                        </Link>
                    </ListItem>

                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.iconNested}>
                            <Category />
                        </ListItemIcon>
                        <ListItemText primary="Категории"/>
                    </ListItem>

                </List>
            </Collapse>
        </List>
    );
};
