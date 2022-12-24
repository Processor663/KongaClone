import React from 'react';
import styled from 'styled-components';

// ICONS
import { AiOutlineHome } from "react-icons/ai";
import { BsCart3, BsTextRight } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";

// STYLES
const Container = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:#ffffff;
    position: fixed;
    width:100%;
    padding: 0.6rem 0rem;
    z-index:99999999999999999999999999999;
    bottom: 0;

    @media screen and (min-width:769px) {
        display:none;
    }

`;

const SubContainer = styled.div`
  background-color: #ffffff;
  font-size: 0.75rem;
  text-align:center;
`;


const FixedDownNav = () => {
  return (
    <>
      <Container>
        <SubContainer>
          <AiOutlineHome size={"1.4rem"} />
          <div>Home</div>
        </SubContainer>
        <SubContainer>
          <MdOutlineLocalOffer size={"1.4rem"} />
          <div>Deals</div>
        </SubContainer>
        <SubContainer>
          <BsCart3 size={"1.4rem"} />
          <div>Cart</div>
        </SubContainer>
        <SubContainer>
          <BsTextRight size={"1.4rem"} />
          <div>More</div>
        </SubContainer>
      </Container>
    </>
  );
}

export default FixedDownNav