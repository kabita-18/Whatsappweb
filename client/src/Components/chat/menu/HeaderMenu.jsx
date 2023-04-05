import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem , styled} from "@mui/material";
import { useState } from "react";

const MenuOption= styled(MenuItem)`
    font-size: 14px;
    padding:15px 60px 5px 24px;
    color:#4A4A4A;
`

const HeaderMenu = ({setopenDrawer}) => {

    const [open, setOpen]=useState(null);

    const handleClose = ()=>{
        setOpen(null);
    }

    const handleClick = (e)=>{
        setOpen(e.currentTarget);
    }
  return (
    <>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchoeE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'

        }}
      >
        <MenuOption onClick = {() => {handleClose(); setopenDrawer(true);}}>Profile</MenuOption>
        
      </Menu>
    </>
  );
};

export default HeaderMenu;
