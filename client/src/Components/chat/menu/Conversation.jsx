
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import React from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation } from '../../../service/Api';

const Component = styled(Box)`
    display:flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer;

`;
const Image = styled('img')({
    width:50,
    height: 50,
    borderRadius:'50%',
    padding: '0 14px',

})


const Conversation = ({user}) => {

    const {setPerson, account} = useContext(AccountContext);

    const getUser = async() =>{
        setPerson(user);
        await setConversation({senserId: account.sub, receiverId: user.sub})
    }
    return (
        <Component onClick = {() => getUser()}>
            <Box>
                <Image src = {user.picture} alt = "dp" />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    );
}

export default Conversation;
