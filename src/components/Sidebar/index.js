import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarMenu,SidebarLink, SideBtnWrap, SidebarRoute, SidebarRouteAll, SidebarRouteHow, SidebarRouteSucces, SidebarRouteService, SidebarRouteSignUp } from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} > 
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                {/* <SidebarMenu> */}
                <SideBtnWrap>
                    <SidebarRouteAll to='/about'>About</SidebarRouteAll>
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRouteHow to='/howitworks'>How it works</SidebarRouteHow>
                </SideBtnWrap>
                <SideBtnWrap>
                <SidebarRouteSucces to='/successstories'>Success stories</SidebarRouteSucces>
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRouteService to='/services'>Help&Contact</SidebarRouteService>
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRouteSignUp to='/signup'>Sign up</SidebarRouteSignUp>
                </SideBtnWrap>
                
                    {/* <SidebarLink to='about' onClick={toggle}>About</SidebarLink> */}
                    {/* <SidebarLink to='howitworks' onClick={toggle}>How it work</SidebarLink> */}
                    {/* <SidebarLink to='successtrories' onClick={toggle}>Success stories</SidebarLink> */}
                    {/* <SidebarLink to='services' onClick={toggle}>Help&Contact</SidebarLink> */}
                    {/* <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink> */}
                {/* </SidebarMenu> */}
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar; 