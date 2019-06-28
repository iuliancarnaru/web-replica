import React from 'react';
import styled from 'styled-components';
import Search from './Search';


const HeroContainer = () => {
  const pageDetails = {
    subtitle: 'Every property in the Plum Guide has been independently tested and reviewed by our hospitality critics. Like the Michelin Guide - but for homes.'
  }
  return (
    <TextBox>
      <HeadingPrimary>STAY IN ONE OF THE TOP 1% <span>OF HOMES IN THE WORLD</span></HeadingPrimary>
      <HedingSecondary>{pageDetails.subtitle}</HedingSecondary>
      <Search />
    </TextBox>
  );
}

export default HeroContainer;

const TextBox = styled.div`
  position: absolute;
  top: 30%;
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