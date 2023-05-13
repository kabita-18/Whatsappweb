
import { useContext, useState , useEffect, useRef} from 'react';
import { Box, styled } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import {AccountContext} from '../../../context/AccountProvider'
import { getMessages, newMessage } from '../../../service/Api';
import Message from './Message';
const Wrapper = styled(Box)`
    background-image : url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`

const Container = styled(Box)`
    padding: 1px 80px;
`
const Messages = ({person, conversation}) => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setMessageFlag] = useState(false);
    const {account} = useContext(AccountContext);
    const [file, setFile] = useState();
    const [image, setImage] = useState('');

    const scrollRef = useRef();

    useEffect(() => {
        const getMessageDetails = async () =>{
           let data=  await getMessages(conversation._id)
           setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id , newMessageFlag]);

    useEffect (() => {
        scrollRef.current?.scrollIntoView({transition: 'smooth'})
    }, [messages])

    const sendText = async(e) =>{
        
        const code = e.keyCode || e.which;
        if(!value) return;
        if(code === 13){
            let message={};
            if(!file){
                    message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value

                }
            }else{
                    message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image

                }

            }
            // console.log(message);
            await newMessage (message);
            setValue('');
            setFile('');
            setImage('');
            setMessageFlag(prev => !prev)
            
        }
    }
    return (
        < Wrapper>
            <Component>{
                messages && messages.map(message =>(

                    <Container ref={scrollRef}>
                    <Message  message ={message}/>
                    </Container>

                ))    
            }

            </Component>
            <Footer sendText={sendText}
            setValue={setValue}
            value={value}
            file = {file}
            setFile={setFile}
            setImage={setImage}
            />
        </ Wrapper>
    );
}

export default Messages;
