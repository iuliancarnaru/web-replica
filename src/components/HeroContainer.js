import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import { Link } from "@reach/router";


const HeroContainer = () => {
  const pageDetails = {
    subtitle: 'Every property in the Plum Guide has been independently tested and reviewed by our hospitality critics. Like the Michelin Guide - but for homes.',
    cities: ['London', 'Paris', 'New York', 'Los Angeles', 'Rome', 'Milan']
  }
  return (
    <TextBox>
      <HeadingPrimary>STAY IN ONE OF THE TOP 1% <span>OF HOMES IN THE WORLD</span></HeadingPrimary>
      <HedingSecondary>{pageDetails.subtitle}</HedingSecondary>
      <Search />
      <Option>or, browse by city</Option>
      {pageDetails.cities.map(city => (
        <Citylink to="/">{city}</Citylink>
      ))}
    </TextBox>
  );
}

export default HeroContainer;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const HeadingPrimary = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: 300;
`;

const HedingSecondary = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 300;
  max-width: 70rem;
  margin: 0 auto;
`;

const Option = styled.div`
  color: white;
  font-family: 'Courgette', cursive;
  padding: 5rem;
  font-size: 2rem;
`;

const Citylink = styled(Link)`
  color: white;
  padding-bottom: .5rem;
  font-size: 2rem;
  text-decoration: none;
  border-bottom:  2px solid white;
  transition: all .2s ease-in-out;
  &:not(:last-child) {
    margin-right: 2.5rem;
  }

  &:hover {
    border-bottom:  2px solid #de007b;
  }
`;