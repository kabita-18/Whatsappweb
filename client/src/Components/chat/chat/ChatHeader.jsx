import { Box, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';

import React from 'react';
import {Search, MoreVert} from '@mui/icons-material';



const Header = styled(Box)`
    display:flex;
    align-items: center;
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
`
const Image = styled('img')({
    height: 40,
    width:40,
    objectFit:'cover',
    borderRadius: '50%'
})

const Name = styled(Typography) `
    margin-left: 12px !important;
`

const Status = styled(Typography) `
    margin-left: 12px !important;
    font-size: 12px;
    color: rgb(0, 0, 0, 0.6)
`

const RightContainer = styled(Box)`
    margin-left: auto;

    & > svg{
        padding: 8px;
        font-size: 24px;
        color: #000;
    }
`
const ChatHeader = ({person}) => {

    const {activeUsers} = useContext(AccountContext);
    return (
        <Header>
            <Image src={person.picture} alt ="dp"/>

            <Box>
                <Name> {person.name} </Name>
                <Status> {activeUsers?.find(user =>user.sub === person.sub)? 'online':'offline'} </Status>
            </Box>
            <RightContainer>
                <Search/>
                <MoreVert/>
            </RightContainer>
        </Header>
    );
}

export default ChatHeader;