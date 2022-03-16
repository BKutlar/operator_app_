import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavBtnLinkAbout,} from './NavbarElement';
import Map from './NavbarMap';


const Navbar = ({toggle}) => {
    // const [scrollNav, setScrollNav] = useState(false);

    // const changeNav = () => {
    //     if(window.scrollY >=10) {
    //         setScrollNav(true)
    //     } else {
    //         setScrollNav(false)
    //     }
    // }

    //     useEffect(() =>{
    //         window.addEventListener('scroll', changeNav);
    //     }, []);

    const toggleHome = () => {
        scroll.scrollToTop();    
    }
    
    return (
        <>
            {/* <Nav scrollNav={scrollNav}> */}
            <IconContext.Provider value={{color: 'red'}}>
                <Nav>
                <NavbarContainer>
                    
                    {/* <Router>
                        <Routes>
                            <Route path="/overview" element={<Overview/>}/>
                        </Routes>
                    </Router> */}
                    <NavLogo to='/' onClick={toggleHome}>Helios</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItem> */}
                            {/* <NavLinks 
                            to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            // activeClass="active"
                            >About</NavLinks> */}
                        {/* </NavItem>
                        <NavItem>
                            <NavLinks to='howitworks'>How it works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='successstories'>Success stories</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Help&Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    
                    <NavBtn>
                        <NavBtnLinkAbout to='/about'>About</NavBtnLinkAbout>
                        <NavBtnLinkAbout to='/howitworks'>How it works</NavBtnLinkAbout>
                        <NavBtnLinkAbout to='/successstories'>Success stories</NavBtnLinkAbout>
                        <NavBtnLinkAbout to='/services'>Help&Contact</NavBtnLinkAbout>
                        <NavBtnLinkAbout  to='/signup'>Sign Up</NavBtnLinkAbout>
                        <NavBtnLinkAbout to='/logout'>Log out</NavBtnLinkAbout>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
            {/* <Map /> */}
        </>
    )
}

export default Navbar;