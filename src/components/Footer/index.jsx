import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
  import {FooterContainer, 
          FooterWrap, 
          FooterLinkWrapper, 
          FooterLinkItems, 
          FooterLinkContainer,
          FooterLinkTitle, 
          FooterLink, 
          SocialIconLink, 
          SocialIcons,
          SocialLogo, 
          SocialMedia, 
          SocialMediaWrap, 
          WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>lorum ipsum</FooterLinkTitle>
                <FooterLink to='/'>lorum ipsum</FooterLink>
                <FooterLink to='/'>lorum ipsum</FooterLink>
                <FooterLink to='/'>lorum ipsum</FooterLink>
                <FooterLink to='/'>lorum ipsum</FooterLink>
                <FooterLink to='/'>lorum ipsum</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>lorum ipsum</FooterLinkTitle>
                <FooterLink to='/'>lorum ipsum</FooterLink>
                <FooterLink to='/'>lorum ipsum</FooterLink>
                <FooterLink to='/'>lorum ipsum</FooterLink>
                <FooterLink to='/'>lorum ipsum</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>ipsum</FooterLinkTitle>
                <FooterLink to='/'>ipsum</FooterLink>
                <FooterLink to='/'>ipsum</FooterLink>
                <FooterLink to='/'>ipsum</FooterLink>
                <FooterLink to='/'>ipsum</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>lorum ipsum</FooterLinkTitle>
                <FooterLink href='/'>Instagram</FooterLink>
                <FooterLink href='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              MNE_OQC
            </SocialLogo>
            <WebsiteRights>MNE_OQC © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
