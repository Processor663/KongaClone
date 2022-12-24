import React from 'react';

// styledComponents
import styled from 'styled-components';

// Images
import image1 from "../assets/TodayDeal_two/laptop.webp";
import image2 from "../assets/TodayDeal_two/phone.webp";
import image3 from "../assets/TodayDeal_two/cream.webp";
import image4 from "../assets/TodayDeal_two/groceries.jpg";
import image5 from "../assets/TodayDeal_two/game.webp";
import image6 from "../assets/TodayDeal_two/watch.webp";

  // Arrays of Images
const Images = [
  { id:0, image: image1 },
  { id:1, image: image2 },
  { id:2, image: image3 },
  { id:3, image: image4 },
  { id:4, image: image5 },
  { id:5, image: image6 }
];

// Styles from Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 1.3rem 1rem;
  background-color: #f2f2f2;
  overflow-x: auto;

  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    padding: 1rem 0.5rem;
  }
`;

const SubContainer = styled.div`
  background-color: #ffffff;
`;

const ImageContainer = styled.div`
  width: 13.53rem;
  padding: 0.625rem 0 0.625rem 0.625rem;
  cursor:pointer;
  @media screen and (max-width: 768px) {
    width: 12.53rem;
  }
`;

const Image = styled.img`
  width:100%;
`;



const TodayDeal_Two = () => {
  const Items = Images.map((Item, index) => {
    return (
        <SubContainer>
          <ImageContainer>
            <Image src={Item.image} alt="image" />
          </ImageContainer>
        </SubContainer>
    );
  })
  return (
    <>
      <Container>
        {Items}
      </Container>
    </>
  );
}

export default TodayDeal_Two;