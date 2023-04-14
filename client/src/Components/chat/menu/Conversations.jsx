import React from 'react';
import { useEffect, useState, useContext } from 'react';

import { getUsers } from '../../../service/Api';

import { AccountContext } from '../../../context/AccountProvider';

import { Box, Divider } from '@mui/material';
import Conversation from './Conversation';
import styled from '@emotion/styled';

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity:0.6;
`
const Conversations = () => {

    const [users, setUsers] = useState([]);

    const {account} = useContext(AccountContext);

    useEffect(() => {
        const fetchDAta = async() => {
            let response = await getUsers();
            setUsers(response);
        }
        fetchDAta();
    }, [])
    return (
        <Component>
            {
                users.map((user, index) => (
                    user.sub !== account.sub &&
                    <>
                    
                     <Conversation key={index} user= {user}/>
                     <StyledDivider/>
                     </>
                ))
            }
        </Component>
    );
}

export default Conversations;
