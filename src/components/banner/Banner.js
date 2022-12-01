import React, { useState } from "react";
import styled from "styled-components";
import image from "../assets/NEXUSweb.jpg_r127hkfvs.webp";
import imageMobile from "../assets/MobileTop.jpg_SknM2_a8i.jpg";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: ${({ display }) => (display ? "none" : "block")};
`;

const Button = styled.button`
  color: white;
  background: #494949;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  position: absolute;
  right: 1em;
  top: 0.5em;

  @media screen and (max-width: 767px) {
    width: 1.5em;
    height: 1.5em;
  }
`;

const ImageDesk = styled.img`
  width: 100%;
  position: relative;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const ImageSmall = styled.img`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Banner = () => {
  const [state, setState] = useState("");

  return (
    <Container display={state}>
      <ImageDesk src={`${image}`} alt="image" />
      <ImageSmall src={`${imageMobile}`} alt="image" />

      <Button onClick={() => setState("true")}> &times; </Button>
    </Container>
  );
};

export default Banner;
