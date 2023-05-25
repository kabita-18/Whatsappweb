
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation, getConversation } from '../../../service/Api';
import { formatDate } from '../../../util/common-utils';
import { emptyProfilePicture } from '../../../constants/data';

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
    

});
const Container = styled(Box)`
    display:flex;
`;
const Timestamp = styled(Typography)`
    font-size : 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;
const Text = styled(Typography)`
    font-size : 14px;
    display: block
    color: rgb(0, 0, 0, 0.9);
    
`;
const ProfileNameText = styled(Typography)`
    font-weight: 500;
    color: #000;

`



const Conversation = ({user}) => {

    // const url = user.picture || emptyProfilePicture;

    const {setPerson, account, newMessageFlag} = useContext(AccountContext);

    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub});
            setMessage ({text: data?.message, timestamp: data?.updatedAt})

        }
        getConversationDetails();
    }, [newMessageFlag])

    const getUser = async() =>{
        setPerson(user);
        await setConversation({senderId: account.sub, receiverId: user.sub})
    }
    return (
        <Component onClick = {() => getUser()}>
            <Box>
                <Image src = {user.picture} alt = "dp" />
            </Box>
            <Box style = {{width: '100%'}}>
                <Container>
                    
                    <ProfileNameText>{user.name}</ProfileNameText>
                    {
                    message?.text && 
                        <Timestamp>{formatDate(message?.timestamp)}
                        </Timestamp>
                    }
                    
                </Container>
                    <Text> { message?.text?.includes('localhost')?'media' : message.text}</Text>
                
            </Box>
            
        </Component>
    );
}

export default Conversation;
