import React from "react";
import Typography from '@material-ui/core/Typography';

import { FullWidthTabs as Navigation } from './Navigation';

export const Stock = () => {
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Склад
            </Typography>
            <Navigation/>
        </div>
    );
};