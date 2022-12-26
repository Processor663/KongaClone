import React from "react";

// StyledComponent
import styled from "styled-components";

// Images
// import bgImage from "../assets/TodayDeal_Images/Bg-Icons.png";

// DataCollection
import { Data } from "./RecommendedForYou_Data";

// Card For Today's Deal
import Card from "../Card";

// JSX Styles
const BgColor = styled.div`
  background-color: #f2f2f2;
  padding: 1rem 1rem;
  @media screen and (max-width: 768px) {
    padding: 0.3rem;
  }
`;

const Container = styled.div`
  border-radius: 8px 8px 8px 8px;
  background-color: #ffffff;
  padding: 0rem 0rem 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 0rem 0rem 0.75rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding: 0.9rem 0.9rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    padding: 0.7rem 0.7rem;
  }
`;

 
const Header = styled.h2`
  font-weight: 700;
  font-size: 1.35rem;
  margin-right: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    margin-right: auto;
  }
`;

const SmallHeader = styled.small`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (max-width: 320px) {
   display: none;
  }
`;

const Overflow = styled.div`
  overflow-x: ${({ oneColumn }) => (oneColumn ? "auto" : "")};
  padding: 0.5rem 0rem 0.5rem;

  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    padding: 0.5rem 0rem 0.5rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: ${({ oneColumn }) => oneColumn ? "repeat(6, 1fr)" : "repeat(3, 1fr)"};
  grid-auto-rows: ${({ oneColumn }) => (oneColumn ? "20rem" : "")};
  width: ${({ oneColumn }) => (oneColumn ? "150%" : "")};
  gap: 1rem;
  padding: 0rem 1rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    width: 400%;
    grid-auto-rows: ${({ oneColumn }) => (oneColumn ? "16rem" : "")};
  }
`;

const RecommendedForYou = ({ desc, flexColumn, oneColumn, review }) => {
  const Products = Data.map((product, index) => {
    return (
      <Card
        key={index}
        data={product}
        review={review}
        flexColumn={flexColumn}
      />
    );
  });
  return (
    <BgColor>
      <Container>
        <HeaderContainer>
          <Header>{desc}</Header>
          {oneColumn ? "" : <SmallHeader>See All Items</SmallHeader>}
        </HeaderContainer>
        <Overflow oneColumn={oneColumn}>
          <Cards oneColumn={oneColumn}>
            {Products}
          </Cards>
        </Overflow>
      </Container>
    </BgColor>
  );
};

export default RecommendedForYou;
