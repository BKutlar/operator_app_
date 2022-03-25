import React, {useState} from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import SubMennu from './SubMenu';
import {SidebarData} from './SidebarData';
import {AiOutlineClose} from 'react-icons/ai'
import './Side.css'

const Nav = styled.div`
bakcground: #fff;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
    
    font-size: 2rem;
    display:flex;
    color: #ffr !important;
    justify-content: flex-start;
    align-items: center;
    top: 50px;
    
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 60px;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index:10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const SidebarLeft = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);



  return (
    <>
        <Nav className='color'>
            <NavIcon to="#">
                <AiIcons.AiOutlineBars onClick={showSidebar}/>
            </NavIcon>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMennu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>

        </Nav>
    </>
  )
}

export default SidebarLeft;