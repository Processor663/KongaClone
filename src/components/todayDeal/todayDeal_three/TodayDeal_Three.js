import React from 'react';
import Card from "./Card.js" ;

// StyledComponents
import styled from 'styled-components';

// Images
import Image1 from "../../assets/todayDeal_three/image1.jpg";
import Image2 from "../../assets/todayDeal_three/image2.jpg";
import Image3 from "../../assets/todayDeal_three/image3.jpg";

// CardImages
import Image4 from "../../assets/todayDeal_three/image4.webp"
import Image5 from "../../assets/todayDeal_three/image5.jpg"
import Image6 from "../../assets/todayDeal_three/image6.webp"
import Image7 from "../../assets/todayDeal_three/image7.webp"

// BrandLogos
import logo1 from "../../assets/brands/logo1.webp";
import logo2 from "../../assets/brands/logo2.webp";
import logo3 from "../../assets/brands/logo3.webp";
import logo4 from "../../assets/brands/logo4.webp";
import logo5 from "../../assets/brands/logo5.webp";
import logo6 from "../../assets/brands/logo6.webp";
import logo7 from "../../assets/brands/logo7.webp";
import logo8 from "../../assets/brands/logo8.webp";
import logo9 from "../../assets/brands/logo9.webp";
import logo10 from "../../assets/brands/logo10.webp";
import logo11 from "../../assets/brands/logo11.webp";
import logo12 from "../../assets/brands/logo12.webp";



const CartData = [
  {
    desc: "HOME FURNISHINGS",
    Image: Image4,
    content: "Get Up To 70% Off",
    shop: "SHOP NOW",
  },

  {
    desc: "FITNESS TOOLS & EQUIPMENT",
    Image: Image5,
    content: "Get Fitness Equipment At Amazing Discounts!",
    shop: "SHOP NOW",
  },

  {
    desc: "HOME FURNISHINGS",
    Image: Image6,
    content: "Get All Kiddies Products At Huge Discounts!",
    shop: "SHOP NOW",
  },

  {
    desc: "TOP DEALS ON TELEVISIONS",
    Image: Image7,
    content: "Get the TV You Want With Bargain Deals!",
    shop: "SHOP NOW",
  },
];



// Styles from Styled Components
const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0.5rem 1rem 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const DivOne = styled.div`
  background-color: #ffffff;
  width: inline;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    display: none;
  }
`;

const DivTwoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 0rem;
  }
`;

const DivTwo = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;


const Image = styled.img`
  max-width: 100%;
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 280%;
  }
`;

const Overflow = styled.div`
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
  }
`;

const CardSize = styled.div`
  width: 23%;
  min-height: 22.625rem;
  @media screen and (max-width: 768px) {
    min-height: 1rem;
  }
`;

const DivThree = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.1rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  
`;

const LogoImageContainer = styled.div`
  display: flex;
  align-items: center;

  min-height: 8.75rem;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    min-height:2.75rem;
  }
`;

const DivFour = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #ffffff;
  color: #5a5f66;

  h2 {
    font-size: 1.25rem;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  p {
    font-size: 0.875rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;



const TodayDeal_Three = () => {
   const Items = CartData.map((item,index) => {
      return <CardSize key={index}> <Card item = {item} /> </CardSize>;
    });

  return (
    <>
      <Container>
        <DivOne>
          <Image src={Image1} alt="image" />
        </DivOne>
        <DivTwoContainer>
          <DivTwo>
            <Image src={Image2} alt="image" />
          </DivTwo>
          <DivTwo>
            <Image src={Image3} alt="image" />
          </DivTwo>
        </DivTwoContainer>
        <Overflow>
          <CardContainer>{Items}</CardContainer>
        </Overflow>
        <DivThree>
            <LogoImageContainer>
              <LogoImage src={logo1} alt="image" />
            </LogoImageContainer>
            <LogoImageContainer>
              <LogoImage src={logo2} alt="image" />
            </LogoImageContainer>{" "}
            <LogoImageContainer>
              <LogoImage src={logo3} alt="image" />
            </LogoImageContainer>{" "}
            <LogoImageContainer>
              <LogoImage src={logo4} alt="image" />
            </LogoImageContainer>{" "}
            <LogoImageContainer>
              <LogoImage src={logo5} alt="image" />
            </LogoImageContainer>{" "}
            <LogoImageContainer>
              <LogoImage src={logo6} alt="image" />
            </LogoImageContainer>{" "}
            <LogoImageContainer>
              <LogoImage src={logo7} alt="image" />
            </LogoImageContainer>{" "}
            <LogoImageContainer>
              <LogoImage src={logo8} alt="image" />
            </LogoImageContainer>{" "}
            <LogoImageContainer>
              <LogoImage src={logo9} alt="image" />
            </LogoImageContainer>{" "}
            <LogoImageContainer>
              <LogoImage src={logo10} alt="image" />
            </LogoImageContainer>
            <LogoImageContainer>
              <LogoImage src={logo11} alt="image" />
            </LogoImageContainer>
            <LogoImageContainer>
              <LogoImage src={logo12} alt="image" />
            </LogoImageContainer>
        </DivThree>
        <DivFour>
          <h2>Konga Online Shopping in Nigeria - Best Shopping Site</h2>
          <p>
            Konga.com is Nigeria’s number one online Shopping destination.We
            pride ourselves in having everything you could possibly need for
            life and living at the best prices than anywhere else. Our access to
            Original Equipment Manufacturers and premium sellers gives us a wide
            range of products at very low prices. Some of our popular categories
            include electronics, mobile phones, computers, fashion, beauty
            products, home and kitchen, Building and construction materials and
            a whole lot more from premium brands. Some of our other categories
            include Food and drinks, automotive and industrial, books, musical
            equipment, babies and kids items, sports and fitness, to mention a
            few. To make your shopping experience swift and memorable, there are
            also added services like gift vouchers, consumer promotion
            activities across different categories and bulk purchases with
            hassle-free delivery. Enjoy free shipping rates for certain products
            and with the bulk purchase option, you can enjoy low shipping rates,
            discounted prices and flexible payment. When you shop on our
            platform, you can pay with your debit card or via KongaPay, which is
            a convenient and secured payment solution. Get the best of lifestyle
            services online. Don't miss out on the biggest sales online which
            takes place on special dates yearly.
          </p>
        </DivFour>
      </Container>
    </>
  );
}

export default TodayDeal_Three;