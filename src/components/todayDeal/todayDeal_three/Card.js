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




function CardTwo({item}) {
  return (
    <>
      <Card style={{ width: "100%", height: "100%" }}>
        <Card.Img variant="top" src={item.Image} />
        <Card.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "100%",
              height: "100%",
            }}
          >
            <Card.Title>
              <CardTitle>{item.desc}</CardTitle>
            </Card.Title>
            <Card.Text style={{ fontSize: "0.9rem" }}>{item.content}</Card.Text>
            <small
              style={{
                fontSize: "0.8125rem",
                color: "#a9054d",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              {item.shop}
              <RiArrowDropRightLine size="1.5rem" />
            </small>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardTwo;
