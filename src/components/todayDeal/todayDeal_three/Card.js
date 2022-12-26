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
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex !important;

  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  -o-flex-direction: column;
  -webkit-box-orient: vertical; /*ie10*/
  flex-direction: column !important;

  -webkit-justify-content: space-around;
  -moz-justify-content: space-around;
  -ms-justify-content: space-around;
  -o-justify-content: space-around;
  -webkit-box-pack: space-around;
  justify-content: space-around !important;
  
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
