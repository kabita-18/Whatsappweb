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
const Conversations = ({text}) => {

    const [users, setUsers] = useState([]);
    

    const {account, socket, setActiveUsers} = useContext(AccountContext);

    useEffect(() => {
        const fetchDAta = async() => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchDAta();
    }, [text])

    useEffect (() =>{
        socket.current.emit('addUsers', account);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    }, [account])
    return (
        <Component>
            {
                users.map((user, index) => (
                    user.sub !== account.sub &&
                    <React.Fragment key={index}>
                    
                     <Conversation  user= {user}/>
                     <StyledDivider/>
                     </React.Fragment>
                ))
            }
        </Component>
    );
}

export default Conversations;
