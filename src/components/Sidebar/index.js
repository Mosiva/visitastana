import React from "react";
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu} from './SidebarElements'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen ={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to ='tourism' onClick={toggle}>TOURISM</SidebarLink>
            <SidebarLink to ='invest' onClick={toggle}>INVEST</SidebarLink>
            <SidebarLink to ='convetinalbureau' onClick={toggle}>CONVENTIONAL BUREAU</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
