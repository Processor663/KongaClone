import React from "react";

// styledComponents
import styled from "styled-components";


// JSX Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  min-height:9rem;
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
    min-height:11.5rem;

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
  @media screen and (max-width: 768px) {
    display:none;
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
@media screen and (max-width:768px) {
  font-size:0.8125rem;
}
`;

const Para_Two = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;




function Cards({data}) {
  return (
    <div>
      <Container>
        <ImageContainer>
          <Img src={data.image} alt="Image" />
        </ImageContainer>{" "}
        <div>
          <Para_one>{data.desc}</Para_one>
          <Para_Two>
            <b>
              <DoubleStrike>N</DoubleStrike>{data.currentPrice}
            </b>{" "}
            <SingleStrike><DoubleStrike>N</DoubleStrike> {data.oldPrice}</SingleStrike>
          </Para_Two>
          <SmallGreen>You save <DoubleStrike>N</DoubleStrike>{data.save}</SmallGreen>
        </div>
      </Container>
    </div>
  );
}

export default Cards;
