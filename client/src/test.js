import React from 'react';
import {useQuery} from 'react-apollo-hooks';

import { manufacturersQuery } from './queries';

export const Test = () => {
    const {data} = useQuery(manufacturersQuery);
    console.log(data);
    return (
        <div>hi</div>
    );
};