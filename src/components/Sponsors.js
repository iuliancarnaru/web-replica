import React from 'react';
import styled from 'styled-components';


const Sponsors = () => {

  const sponsorsList = {
    nyt: 'https://static.plumcache.com/static-images/logos/press/press-logo-new-york-times--white.svg?q=55&w=94&auto=format&vv=1',
    evs: 'https://static.plumcache.com/static-images/logos/press/press-logo-evening-standard.svg?q=55&w=94&auto=format&vv=1',
    baz: 'https://static.plumcache.com/static-images/logos/press/press-logo-harpers-bazaar--white.svg?q=55&w=94&auto=format&vv=1',
    tel: 'https://static.plumcache.com/static-images/logos/press/press-logo-telegraph--white.svg?q=55&w=94&auto=format&vv=1',
    tim: 'https://static.plumcache.com/static-images/logos/press/press-logo-the-times.svg?q=55&w=94&auto=format&vv=1',

  }

  return (
    <SponsorsStyled>
      {Object.keys(sponsorsList).map((key, index) => (
        <ImageContainer key={index + 1}>
          <img src={sponsorsList[key]} alt="sponsor" />
        </ImageContainer>
      ))}
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
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: auto;
  margin-right: 3rem;
  position: relative;

 img {
   width: 70%;
   align-self: center;
 }
  /* height: 200px */
`;