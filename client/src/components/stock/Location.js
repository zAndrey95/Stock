import React from "react";
import {useQuery} from 'react-apollo-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {locationsQuery} from './Queris';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
        marginBottom: 20,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

const Name = ({isEdit, handleChange, value}) => {
    const classes = useStyles();
    return (
        <div>
            { isEdit ?
                <TextField
                    id="outlined-name"
                    label="Наименование"
                    className={classes.textField}
                    value={value}
                    onChange={handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                :
                <Typography
                    className={classes.pos}
                    variant="h5" component="h2"
                    color="textSecondary" >
                    {value}
                </Typography>
            }
        </div>
    );
};
const Address = ({isEdit, handleChange, value}) => {
    const classes = useStyles();
    return (
        <div>
            { isEdit ?
                <TextField
                    id="outlined-name"
                    label="Адрес"
                    className={classes.textField}
                    value={value}
                    onChange={handleChange('address')}
                    margin="normal"
                    variant="outlined"
                />
                :
                <Typography className={classes.pos} color="textSecondary">
                    {value}
                </Typography>
            }
        </div>
    );
};
const Description = ({isEdit, handleChange, value}) => {
    const classes = useStyles();
    return (
        <div>
            { isEdit ?
                <TextField
                    id="outlined-name"
                    label="Описание"
                    className={classes.textField}
                    value={value}
                    onChange={handleChange('description')}
                    margin="normal"
                    variant="outlined"
                />
                :
                <Typography variant="body2" component="p">
                    {value}
                </Typography>
            }
        </div>
    );
};

export const Location = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({});
    const [isEdit, setEdit] = React.useState(false);

    const {data} = useQuery(locationsQuery);

    const handleChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };
    const handleEdit = () => {
        setEdit(!isEdit);
    };
    const handleSave = () => {
        setEdit(!isEdit);
        console.log(values);
    };

    let items;
    if (!data) {
        items = 'loading';
    } else {
        items = data.locations.map((value) => {
            return (
                <Card className={classes.card}>
                    <CardContent>
                        <Name isEdit={isEdit} handleChange={handleChange} value={value.name}/>
                        <Address isEdit={isEdit} handleChange={handleChange} value={value.address}/>
                        <Description isEdit={isEdit} handleChange={handleChange} value={value.description}/>
                    </CardContent>
                    <CardActions>
                        {isEdit
                            ? <Button size="small" onClick={handleSave}>Сохранить</Button>
                            : <Button size="small" onClick={handleEdit}>Редактировать</Button>
                        }
                        <Button size="small">Удалить</Button>
                    </CardActions>
                </Card>
            );
        });
    }

    return (
        <div>
            {items}
        </div>
    );
};

