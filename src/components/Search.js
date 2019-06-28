import React from 'react';
import styled from 'styled-components';
import { Button } from './Hero';

const Search = () => {
  return (
    <SearchContainer>
      <SearchWrapper>
      <ion-icon name="locate"></ion-icon>
        <StyledSelect>
          <option>City</option>
          <option value="london">London</option>
          <option value="paris">Paris</option>
          <option value="new-york">New York</option>
        </StyledSelect>
        <div>
          <span>Check in: </span>
          <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"></input>
        </div>
        <div>
          <span>Check out: </span>
          <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"></input>
        </div>
        <ion-icon name="contacts"></ion-icon>
        <StyledSelect>
          <option>Guests</option>
          <option value="london">2</option>
          <option value="paris">4</option>
          <option value="new-york">6</option>
        </StyledSelect>
        <Button primary>Search</Button>
      </SearchWrapper>
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  color: #de007b;
  background-color: white;
  margin-top: 4rem;
  border-radius: .5rem;
`;

const SearchWrapper = styled.div`
  display:flex;
  align-items: center;
  padding-left: 2rem;
`;

const StyledSelect = styled.select`
  width: 10rem;
  height: 4rem;
  font-size: 1.6rem;
  border: none;
  margin: .5rem;
  background: none;
`;