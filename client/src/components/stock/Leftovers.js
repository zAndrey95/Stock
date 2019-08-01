import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { SimpleSelect } from '../Select';
import { Search } from '../Search';
import { Control } from '../Control';
import Table from '../Table';

const stocks = ['Офис', 'Гараж'];

export const Leftovers = () => {
    const [values, setValues] = React.useState({stock: ''});
    const [search, setSearch] = React.useState( '');

    const handleChange = (event) => {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    };
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleAdd = () => {
        console.log('Add');
    };
    const handleEdit = () => {
        console.log('Ed');
    };
    const handleDelete = () => {
        console.log('Del');
    };

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Склад
            </Typography>
            <Grid container alignItems="center">
                <Grid item xs={3}>
                    <SimpleSelect
                        value={values.stock}
                        name={'stock'}
                        handleChange={handleChange}
                        values={stocks}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Control add deleted edit
                             handleAdd={handleAdd}
                             handleEdit={handleEdit}
                             handleDelete={handleDelete}/>
                </Grid>
                <Grid item xs={3}>
                    <SimpleSelect
                        value={values.stock}
                        name={'stock'}
                        handleChange={handleChange}
                        values={stocks}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Search handleSearch={handleSearch} search={search}/>
                </Grid>
            </Grid>
            <Table/>
        </div>
    );
};