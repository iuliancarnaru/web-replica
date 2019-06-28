import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from "@reach/router";
import HeroContainer from './HeroContainer';
import Sponsors from './Sponsors';

const Hero = () => {

  const navigationLinks = ['Locations', 'Gift vouchers', 'About Us', 'Log In', 'Sign Up', 'Help'];

  return (
    <HeroWrapper>
      <HeaderWrapper>
        <Logo>COMPANY LOGO</Logo>
        <Navigation>
          {navigationLinks.map(link => (<Routerlink key={link} to="/">{link}</Routerlink>))}
          <Button>Nominate a home</Button>
          <Button primary>Speak to an expert</Button>
        </Navigation>
      </HeaderWrapper>
      <Sponsors />
      <HeroContainer />
    </HeroWrapper>
  )
}

export default Hero;

const HeroWrapper = styled.div`
  width: 100%;
  height: 95vh;
  background-color: green;
  background-image: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-position: center bottom;
  position: relative;
`;

const HeaderWrapper = styled.div`
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  color: white;
  font-weight: 100;
`;

const Navigation = styled.div`
  display: flex;
  color: white;
  align-items: center;
`;

const Routerlink = styled(Link)`
  color: white;
  font-size: 1.6rem;
  text-decoration: none;
  border-bottom:  1px solid transparent;
  transition: all .2s ease-in-out;
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    border-bottom:  1px solid white;
  }
`;

export const Button = styled.button`
  border-radius: .5rem;
  background: none;
  font-size: 1.6rem;
  color: white;
  padding: 1rem 1.5rem;
  margin-left: .5rem;
  transition: all .2s ease-in-out;

  &:hover {
    color: #de007b;
  }

  ${props => props.primary && css`
      border: .1rem solid #de007b;
      background-color: #de007b;

      &:hover {
        background-color: #ff34a4;
        color: white
      }
  `}
`;