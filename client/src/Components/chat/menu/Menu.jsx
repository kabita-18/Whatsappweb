import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Search from './Search';

const Menu = () => {
    return (
        <div>
            <Box>
                <Header/>
                <Search/>
            </Box>
        </div>
    );
}

export default Menu;
