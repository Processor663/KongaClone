import React from "react";
import Caro from "./caro/Caro";
import Aside from "./aside/Aside";
import styled from "styled-components";





const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 2rem 0rem 2rem 0rem;

  @media screen and (max-width: 998px) {
    flex-wrap: wrap;
    padding: 1rem 0rem 1rem 0rem;
  }
`;

const heroSection = () => {
  return (
    <Container>
      <Caro />
      <Aside />
    </Container>
  );
};

export default heroSection;
