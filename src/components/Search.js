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
        <DateContainer>
          <span>Check in: </span>
          <Calendar type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"></Calendar>
        </DateContainer>
        <DateContainer>
          <span>Check out: </span>
          <Calendar type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"></Calendar>
        </DateContainer>
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
  font-family: 'Ubuntu', sans-serif;

  span {
    display: block;
    color: #222;
    margin-right: .5rem;
    
  }
`;

const SearchWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
`;

const StyledSelect = styled.select`
  width: 10rem;
  height: 4rem;
  font-size: 1.4rem;
  border: none;
  margin: 1rem;
  background: none;
  font-size: 1.6rem;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Calendar = styled.input`
  &[type="date"] {
    padding: 1rem;
  }
`;