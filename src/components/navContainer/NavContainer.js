import React from "react";
import { BsQuestion, BsChevronDown, BsCart3 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import image1 from "../assets/navbar1/62f8a0d88e07573b4d46735aa24f3f04.webp";
import NavBarMobile from "./NavBarMobile";
import SearchBar from "./SearchBar";

const Container = styled.div`
  background-color: #ed017f;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ListMenu1 = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  color: #ffffff;
  margin-bottom: 0rem !important;
  // padding-left: 0rem !important;
`;

const ListItem1 = styled.li`
  padding: ${({ nopadding }) => (nopadding ? "0em" : "0.9375em 1.9em")};
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: ${({ transparent }) =>
      transparent ? "transparent" : "#ffffff"};
    color: ${({ transparent }) => (transparent ? "" : "var(--pink)")};
  }
`;

const IContainer = styled.i`
  background-color: #f24da5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.4rem;
`;

const Para = styled.p`
  margin-right: 0.4rem;
`;

const HelpContainer = styled.div`
  display: flex;
`;

const CartDiv = styled.div`
  height: 2.5rem;
  background-color: #33b27b;
  // padding: 0rem 1.5rem;
  padding: 0.9375rem 1.25rem;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const CartPara = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;



const SpanCart = styled.span`
  background-color: #fff;
  border-radius: 0.125rem;
  color: #000;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-left: 0.5rem;
  padding: 0.1875rem 0.375rem;
`;

const ListMenu2 = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: #94004f;
  list-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 0.8125rem;
  margin-bottom: 0rem !important;
  padding-left: 0rem !important;
`;

const ListItem2 = styled.li`
  color: #fcf9fb;
  text-align: center;
  font-weight: ${({ bold }) => (bold ? "bold" : "")};
  padding: 0.75rem 0.9375rem;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const CateSpan = styled.span`
  margin-left: 0.2rem;
`;

const Image1 = styled.img`
  max-height: 2.1875rem;
  width: auto;
`;

const NavContainer = () => {
  return (
    <>
      <Container>
        <ListMenu1>
          <ListItem1 transparent>
            <Image1 src={image1} alt="image" />
          </ListItem1>
          <ListItem1>
            Store <br /> Locator
          </ListItem1>
          <ListItem1>
            Sell on <br />
            Konga
          </ListItem1>
          <ListItem1 transparent nopadding>
            <SearchBar />
          </ListItem1>
          <ListItem1>
            <HelpContainer>
              <IContainer>
                <BsQuestion size="1.5rem" />
              </IContainer>
              <Para>Help</Para>
              <BsChevronDown size="1rem" />
            </HelpContainer>
          </ListItem1>
          <ListItem1>
            login / <br /> Signup
          </ListItem1>
          <ListItem1 transparent>
            <CartDiv>
              <BsCart3 size="1rem" />
              <CartPara>
                My <br />
                Cart
              </CartPara>
              <SpanCart>0</SpanCart>
            </CartDiv>
          </ListItem1>
        </ListMenu1>
        <ListMenu2>
          <ListItem2 bold>
            All Categories
            <CateSpan>
              <FaBars size="1.0rem" />
            </CateSpan>
          </ListItem2>
          <ListItem2>Computers and Accessories</ListItem2>
          <ListItem2>Phones and Tablets</ListItem2>
          <ListItem2>Electronics</ListItem2>
          <ListItem2>Konga Fashion</ListItem2>
          <ListItem2>Home and Kitchen</ListItem2>
          <ListItem2>Baby, Kids and Toys</ListItem2>
          <ListItem2>Other Categories</ListItem2>
        </ListMenu2>
      </Container>

      {/* <=================NavBar for Mobile devices=======================> */}
      <NavBarMobile />
    </>
  );
};

export default NavContainer;
