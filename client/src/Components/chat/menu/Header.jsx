import { useContext, useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box , styled} from '@mui/system';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';

import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';



const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display:flex;
    align-items:center;
    
`;
const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left:2px;
        padding:8px;
        color:#000;
        margin-right:8px;
        margin-top:3px;
    }
    & : nth-child(2){
        font-size:22px;
    }
`


const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius :'50%'
    
})

const Header = () => {

    const [openDrawer, setopenDrawer] = useState(false);

    const {account } = useContext(AccountContext);

    const toggleDrawer = () => {
        setopenDrawer(true);
    }
    return (
        <>
        <Component>
            <Image src ={account.picture} alt ="dp" onClick={()=> toggleDrawer()}/>
            
            <Wrapper>
                <GroupsIcon/>
                <ChatIcon/>
                <HeaderMenu setopenDrawer={setopenDrawer}/>
            </Wrapper>
             
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setopenDrawer}/>
        </>
    );
}

export default Header;
