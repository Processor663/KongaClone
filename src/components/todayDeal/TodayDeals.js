import React from "react";

// StyledComponent
import styled from "styled-components";

// Images
import bgImage from "../assets/TodayDeal_Images/Bg-Icons.png";

// DataCollection
import { Data } from "./TodayDealData";

// Card For Today's Deal
import Card from "./Card";

// JSX Styles
const BgColor = styled.div`
  background-color: #f2f2f2;
  padding: 0rem 1rem; 
  @media screen and (max-width: 768px) {
    padding: 0.3rem;
  }
`;

const Container = styled.div`
  border-radius: 8px 8px 8px 8px;
  background-color: #ffffff;
`;

const Header = styled.h2`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
`;
const HeaderContainer = styled.div`
  background-color: #94004f;
  padding: 0.5rem 0.9rem;
  border-radius: 8px 8px 0px 0px;
`;

const Overflow = styled.div`
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  grid-auto-row: 100px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    width: 400%;
  }
`;

const TodayDeals = () => {
  const Products = Data.map((product, index) => {
      return(

        <Card key={index} data={product}/>
      )
  })

  return (
    <BgColor>
      <Container>
        <HeaderContainer>
          <Header>Today's Deals</Header>
        </HeaderContainer>
        <Overflow>
          <Cards>
            {Products }
          </Cards>
        </Overflow>
      </Container>
    </BgColor>
  );
};

export default TodayDeals;
