import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation, setConversation } from '../../../service/Api';

const ChatBox = () => {

    const {person, account} = useContext(AccountContext);
    const [conversation, setConversationState] = useState({});

    useEffect(()=>{
        const getConversationDetails = async () =>{
            await setConversation({senderId: account.sub, receiverId: person.sub})
            let data = await getConversation({senderId: account.sub, receiverId: person.sub})
            setConversationState(data);
        }
        getConversationDetails();
    }, [person.sub])
    return (
        
           <Box style={{height:'75%'}} >
                <ChatHeader person={person}/>
                <Messages person={person} conversation={conversation}/>
           </Box>
    );
}

export default ChatBox;
