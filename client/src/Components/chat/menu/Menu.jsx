import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';
import { useState } from 'react';

const Menu = () => {

    const [text, setText] = useState(' ');
    return (
        <div>
            <Box>
                <Header/>
                <Search setText= {setText}/>
                <Conversations text = {text}/>
            </Box>
        </div>
    );
}

export default Menu;
