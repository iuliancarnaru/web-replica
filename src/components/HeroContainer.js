import React from 'react';
import styled from 'styled-components';


const HeroContainer = () => {
  return (
    <TextBox>
      <HeadingPrimary>STAY IN ONE OF THE TOP 1% <span>OF HOMES IN THE WORLD</span></HeadingPrimary>
    </TextBox>
  );
}

export default HeroContainer;

const TextBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const HeadingPrimary = styled.h1`
  color: white;
  font-size: 6rem;
  font-weight: 300;
`;