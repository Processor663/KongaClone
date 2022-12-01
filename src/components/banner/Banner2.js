import React from "react";
import styled from "styled-components";
import image1 from "../assets/image1/k_express2.webp";
import image2 from "../assets/image1/k_travels2.webp";
import image3 from "../assets/image1/konga_health.webp";
import image4 from "../assets/image1/konga_pay.webp";
import image5 from "../assets/image1/kongafood.webp";
import image6 from "../assets/image1/new_konga_drinks.png";
import image7 from "../assets/image1/new_konga_groceries.png";

const Container = styled.div`
  // height: 10vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: #f6f6f6;
`;

const Image = styled.img`
  width: 100%;
  cursor:pointer;
`;

const ImageContainer = styled.div`
  margin-right: 3.125rem;
  max-width: 6.25rem;
  padding: 0.53312rem;
`;

const Banger2 = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={image1} alt="Image" />
        </ImageContainer>
        <ImageContainer>
          <Image src={image2} alt="Image" />
        </ImageContainer>
        <ImageContainer>
          <Image src={image3} alt="Image" />
        </ImageContainer>
        <ImageContainer>
          <Image src={image4} alt="Image" />
        </ImageContainer>
        <ImageContainer>
          <Image src={image5} alt="Image" />
        </ImageContainer>
        <ImageContainer>
          <Image src={image6} alt="Image" />
        </ImageContainer>
        <ImageContainer>
          <Image src={image7} alt="Image" />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Banger2;
