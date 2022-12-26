import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/caroOneImages/caro1.jpg";
import image2 from "../../assets/caroOneImages/caro2.jpg";
import image3 from "../../assets/caroOneImages/caro3.jpg";
import image4 from "../../assets/caroOneImages/caro4.jpg";
import image5 from "../../assets/caroOneImages/caro5.jpg";
import image6 from "../../assets/caroOneImages/caro6.jpg";
import image7 from "../../assets/caroOneImages/caro7.jpg";
import image8 from "../../assets/caroOneImages/caro8.webp";
import styled from "styled-components";



const Container = styled.div`
  width: 57.25rem;

  img {
    border-radius: 8px;
    @media screen and (max-width: 998px) {
      border-radius: 0px;
    }
  }
`;




function Caro() {
  return (
    <Container >
      <Carousel fade interval={2300}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image6} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image7} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image8} alt="slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Caro;
