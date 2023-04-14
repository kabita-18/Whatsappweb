import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
    return (
        <div>
            <Box>
                <Header/>
                <Search/>
                <Conversations/>
            </Box>
        </div>
    );
}

export default Menu;
