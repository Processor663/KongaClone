import React from "react";
import Card from "react-bootstrap/Card";
import { RiArrowDropRightLine } from "react-icons/ri";
import styled from "styled-components";

// Style to Override Bootstrap Card Title
const CardTitle = styled.div`
  font-size: 1.125rem;

  @media screen and (max-width: 768px) {
    font-size: 0.92rem !important;
  }
`;

const ExtraStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;

`;

const Small = styled.div`
    font-size: 0.8125rem;
    color: #a9054d;
    font-weight: 500;
    cursor: pointer;

`;


               

function CardTwo({item}) {
  return (
    <>
      <Card style={{ width: "100%", height: "100%" }}>
        <Card.Img variant="top" src={item.Image} />
        <Card.Body>
          <ExtraStyle>
            <Card.Title>
              <CardTitle>{item.desc}</CardTitle>
            </Card.Title>
            <Card.Text style={{ fontSize: "0.9rem" }}>{item.content}</Card.Text>
            <Small>
              {item.shop}
              <RiArrowDropRightLine size="1.5rem" />
            </Small>
          </ExtraStyle>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardTwo;
