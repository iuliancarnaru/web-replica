import React from 'react';
import styled from 'styled-components';


const Sponsors = () => {

  const sponsorsList = {
    src: 'https://smallimg.pngkey.com/png/small/79-791143_the-new-york-times-new-york-times-logo.png',
  }

  return (
    <SponsorsStyled>
      {Object.keys(sponsorsList).map((key, index) => console.log(sponsorsList[key]))}
    </SponsorsStyled>
  );
}

export default Sponsors;

const SponsorsStyled = styled.div`
  background-color: rgba(42,33,62,.7);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8rem;
`;