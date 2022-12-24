import React from 'react';

// ICONS
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFillPlayBtnFill } from "react-icons/bs";

// Styled Componenets
import styled from 'styled-components';

const content = {
  content_one: [
    "About Us",
    "Contact Us",
    "Careers",
    "Our Blog",
    "Forum",
    "Terms & Conditions",
  ],
  content_two: [ "KongaPay", "Wallet", "Verve", "Mastercard", "Visa"],
  content_three: [
    "Buyer Safety Centre",
    "FAQs",
    "Delivery",
    "Konga Return Policy",
    "Digital Services",
    "Bulk Purchase",
  ],
  content_four: [
    "Site Map",
    "Track My Order",
    "Privacy Policy",
    "Authentic Items Policy",
  ],
  content_five: [ "Become a Konga Affiliate"],
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #0c0c0c;
  font-size: 0.8125rem;
  color: #b5b5b5;
  padding: 2rem 0.7rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SubContainer = styled.div`
  &:hover {
    h2 {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom:1rem; 
  }
`;

const Head = styled.h2`
  font-weight: 700;
  font-size: 0.9375rem;
`;

const Content = styled.div`
  margin-top: 0.2rem;
  &:hover {
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
  }
`;



const SubContainerTwo = styled.div`
  width: 35%;
  // background-color:red;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;


const MarginAuto = styled.div`
  margin: auto;
  width: 80%;
`;

const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width: 45%;
  background-color:#000000;
  margin-top: 1rem;
  padding:0.2rem 1rem;
  border-radius:5px;
`;

const ConnectWithUs = styled.div`
  margin-top: 2rem;
`;

const RoundContainer = styled.div`
  display:flex;
`;

const Round = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  margin-top: 1rem;
  border-radius: 50%;
  background-color: #333333;
  min-width: 3rem;
  min-height: 3rem;
`;

const CopyContainer = styled.div`
  display: grid;
  grid-template-columns:repeat(3, 1fr);
  align-items:center;
  background-color: #0c0c0c;
  color: #b5a5a5;
  padding: 3rem 0rem;
`;

const CopyRight = styled.div`
  text-align:center;
`;

const Line = styled.div`
  height: 0.1rem;
  background-color: #333333;
`;





const FooterTwo = () => {
  return (
    <>
      <Container>
        <SubContainer>
          <Head>ABOUT KONGA</Head>
          {content.content_one.map((content_one, index) => (
            <Content key={index}> {content_one} </Content>
          ))}
        </SubContainer>
        <SubContainer>
          <Head>PAYMENT</Head>
          {content.content_two.map((content_two, index) => (
            <Content key={index}> {content_two} </Content>
          ))}
        </SubContainer>
        <SubContainer>
          <Head> BUYING ON KONGA</Head>
          {content.content_three.map((content_three, index) => (
            <Content key={index}> {content_three} </Content>
          ))}
        </SubContainer>
        <SubContainer>
          <Head> MORE INFO</Head>
          {content.content_four.map((content_four, index) => (
            <Content key={index}> {content_four} </Content>
          ))}
        </SubContainer>
        <SubContainer>
          <Head>MAKE MONEY ON KONGA</Head>
          {content.content_five.map((content_five, index) => (
            <Content key={index}> {content_five} </Content>
          ))}
        </SubContainer>
        <SubContainerTwo>
          <MarginAuto>
            <Head>DOWNLOAD & CONNECT WITH US</Head>
            <BrandContainer>
              <Brand>
                <div>
                  <AiFillApple size="2.5rem" color="#ffffff" />
                </div>
                <div>
                  <Content>Download on</Content>
                  <Head>App Store</Head>
                </div>
              </Brand>
              <Brand>
                <div>
                  <AiFillAndroid size="2.5rem" color="#ffffff" />
                </div>
                <div>
                  <Content>Download on</Content>
                  <Head>Google Play</Head>
                </div>
              </Brand>
            </BrandContainer>
            <ConnectWithUs>
              <Head>CONNECT WITH US</Head>
              <RoundContainer>
                <Round>
                  <FaFacebookF size="1.2rem" color="#ffffff" />
                </Round>
                <Round>
                  <FaTwitter size="1.2rem" color="#ffffff" />
                </Round>
                <Round>
                  <FaInstagram size="1.2rem" color="#ffffff" />
                </Round>
                <Round>
                  <BsFillPlayBtnFill size="1.2rem" color="#ffffff" />
                </Round>
              </RoundContainer>
            </ConnectWithUs>
          </MarginAuto>
        </SubContainerTwo>
      </Container>
      <CopyContainer>
        <Line />
        <CopyRight>
          <Content>Copyright © 2022 Amadi Miracle. All rights reserved</Content>
        </CopyRight>
        <Line />
      </CopyContainer>
    </>
  );
}

export default FooterTwo;