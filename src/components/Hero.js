import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from "@reach/router";

const Hero = () => {

  const navigationLinks = ['Locations', 'Gift vouchers', 'About Us', 'Log In', 'Sign Up', 'Help'];

  return (
    <HeroWrapper>
      <HeaderWrapper>
        <Logo>COMPANY LOGO</Logo>
        <Navigation>
          {navigationLinks.map(link => (<Routerlink to="/">{link}</Routerlink>))}
          <Button>Nominate a home</Button>
          <Button primary>Speak to an expert</Button>
        </Navigation>
      </HeaderWrapper>
    </HeroWrapper>
  )
}

export default Hero;

const HeroWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-color: green;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-position: center top;
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
  &:not(:last-child) {
    padding-right: 1rem;
  }
`;

const Button = styled.button`
  border-radius: .5rem;
  background: none;
  font-size: 1.6rem;
  color: white;
  padding: 1rem 1.5rem;
  margin-left: .5rem;

  &:hover {
    background-color: white;
    color: #de007b;
  }

  ${props => props.primary && css`
      border: .1rem solid #de007b;
      background-color: #de007b;
  `}
`;