import React from "react";

// styledComponents
import styled from "styled-components";

// ICONS
import { BsStarFill } from "react-icons/bs";
// import { Data } from "./RecommendedForYou/RecommendedForYou_Data";

// JSX Styles
const Container = styled.div`
  position: relative;
  min-height: ${({ flexColumn }) => (flexColumn ? "" : "9rem")};
  height: ${({ flexColumn }) => (flexColumn ? "100%" : "")};

  @media screen and (max-width: 768px) {
    min-height: 11.5rem;
  }
`;


const SubContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexColumn }) => (flexColumn ? "column" : "")};
  justify-content: ${({ flexColumn }) => (flexColumn ? "space-around" : "")};
  align-items: center;
  height: 100%;
  padding: 0.9375rem;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.38);
    -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.38);
  }

  @media screen and (max-width:768px) {
    flex-direction column;
    height: 100%;

  }
`;

const Off = styled.div`
  background-color: #ff3b3b;
  border-bottom-right-radius: 4.0625rem;
  border-top-right-radius: 4.0625rem;
  color: #fff;
  display: inline-block;
  font-size: 0.625rem;
  font-weight: 600;
  left: 0;
  padding: 0.5rem 0.5rem 0.625rem;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 0.625rem;
  z-index: 9;

  @media screen and (min-width: 768px) {
    display: none;
    display: ${({ flexColumn }) => (flexColumn ? "block" : "")};
  }
`;

const ImageContainer = styled.div`
  width: 6.25rem;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    width: 5.25rem;
    margin-right: 0rem;
    margin-bottom: 0.5rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;


const SmallGreen = styled.small`
  color: #33b27b;
  font-size: ${({ flexColumn }) => (flexColumn ? "1rem" : "")};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SingleStrike = styled.small`
  color: #8d8d8e;
  text-decoration:line-through;
`;
const DoubleStrike = styled.small`
  text-decoration: line-through double;
`;


const Para_one = styled.div`
  font-size: ${({ flexColumn }) => ( flexColumn ? "1.1rem" : "" )};

  @media screen and (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

const Para_Two = styled.div`
  font-size: ${({ flexColumn }) => ( flexColumn ? "1.1rem" : "" )};

  @media screen and (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;


const StarFlex = styled.div`
  display: flex;
  margin-top:0.5rem;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const Review = styled.div`
  color: #9b9b9b;
  font-size: 0.75rem;
`;


function Cards({ data, review, flexColumn }) {
  return (
    <Container flexColumn={flexColumn}>
      <Off flexColumn={flexColumn}>{data.off} OFF</Off>
      <SubContainer flexColumn={flexColumn}>
        <ImageContainer>
          <Img src={data.image} alt="Image" />
        </ImageContainer>{" "}
        <div>
          <Para_one flexColumn={flexColumn}>{data.desc}</Para_one>
          <Para_Two flexColumn={flexColumn}>
            <b>
              <DoubleStrike>N</DoubleStrike>
              {data.currentPrice}
            </b>{" "}
            <SingleStrike>
              <DoubleStrike>N</DoubleStrike> {data.oldPrice}
            </SingleStrike>
          </Para_Two>
          <SmallGreen flexColumn={flexColumn}>
            You save <DoubleStrike>N</DoubleStrike>
            {data.save}
          </SmallGreen>
          {review && (
            <StarFlex>
              <StarContainer>
                <BsStarFill color="#fba100" size="0.8rem" />
                <BsStarFill color="#fba100" size="0.8rem" />
                <BsStarFill color="#fba100" size="0.8rem" />
                <BsStarFill color="#fba100" size="0.8rem" />
                <BsStarFill color="#fba100" size="0.8rem" />
              </StarContainer>
              <div>
                <Review>{data.review}</Review>
              </div>
            </StarFlex>
          )}
        </div>
      </SubContainer>
    </Container>
  );
}
export default Cards;
