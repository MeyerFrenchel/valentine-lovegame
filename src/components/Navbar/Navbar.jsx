import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>love game</NavLogo>
                <MobileIcon>
                    <FaBars style={{color:'#74c7b8'}}/>
                </MobileIcon>
                <NavMenu>
                <NavItem>
                    <NavLinks to='signin'>SIGN IN</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='info'>iNFO</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='leaderboard'>LEADERBOARD</NavLinks>
                </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
