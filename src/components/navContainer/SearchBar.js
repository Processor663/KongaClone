import React from "react";
import { BiSearch } from "react-icons/bi";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0em 1em;
  &:hover {
    color: white;
  }
`;

const Input = styled.input`
  font-family: var(--fontFamily);
  border: none;
  outline: none;
  padding: 0.5375em 0.6em;
  width: 30rem;
  border-radius: 4px 0px 0px 4px;
`;

const I = styled.i`
  background-color: #fba100;
  padding: 0.5375em 0.9em;
  border-radius: 0px 4px 4px 0px;
  display: flex;
`;
const SearchBar = () => {
  return (
    <Container>
      <Input
        type="search"
        placeholder="Search for product, brand and categories..."
      />
      <I>
        <BiSearch size="1rem" />
      </I>
    </Container>
  );
};

export default SearchBar;
