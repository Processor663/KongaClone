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
  margin-right: 3rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin-right: auto;
    font-size: 1.5rem;
  }
`;

const SmallHeader = styled.small`
 &:hover {
  cursor: pointer;
  text-decoration: underline;

 }
`;

const HeaderContainer = styled.div`
  display: flex;
  color: #ffffff;
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

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    width: 400%;
  }
`;

const TodayDeals = () => {
  const Products = Data.map((product, index) => {
      return (
        <Card
          key={index}
          data={product}
         
        />
      );
  })

  return (
    <BgColor>
      <Container>
        <HeaderContainer>
          <Header>Today's Deals</Header>
          <SmallHeader>See All Items</SmallHeader>
        </HeaderContainer>
        <Overflow>
          <Cards>
            {Products}
          </Cards>
        </Overflow>
      </Container>
    </BgColor>
  );
};

export default TodayDeals;
