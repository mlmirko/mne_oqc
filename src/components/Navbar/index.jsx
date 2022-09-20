import React, {useState, useEffect} from 'react'
import { FaSpa } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav,
         NavbarContainer,
         NavLogo, 
         MobileIcon, 
         NavMenu, 
         NavLinks, 
         NavItem, 
         NavBtn, 
         NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#FFFFFF'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaSpa />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >ABOUT US</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >PRODUCT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services2'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >WHY US</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >RESULTS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >CONTACT US</NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
