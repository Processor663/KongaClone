import React, {useEffect, useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  TbBuildingStore,
  TbShirt,
  TbDotsCircleHorizontal,
} from "react-icons/tb";
import { BsCart3, BsPhone, BsReplyAll } from "react-icons/bs";
import { BiMessageEdit } from "react-icons/bi";

import styled from "styled-components";
import Logo from "../assets/navbar1/Logo.png";
import SearchBar from "./SearchBar";
import SideDrawer from "./sideDrawer/SideDrawer";

const Container = styled.div`
  background-color: #ffffff;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const DivOne = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0rem 0rem 0rem;
`;

const SubDIVOne = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubDIVOneCon = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const DivTwo = styled.div`
  margin: 1rem 0rem 1rem 0rem;
  display: ${({ display }) => (display === "true" ? "none" : "")};
  padding-bottom: ${({ hide }) => (hide ? "1rem" : "0rem")};
`;

const DivThree = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 0.5rem 0rem 0.5rem;
  display: ${({ display }) => (display === "true" ? "none" : "")};

  @media screen and (min-width: 500px) {
    padding: 0rem 2.5rem 0rem 2.5rem;
  }
`;

const SubDIVThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #50545b;
`;

const Para3 = styled.p`
  font-size: 0.7rem;
  color: #50545b;
`;

const ToggleButton = styled.button`
background-color:transparent;
border:none;`

const Image = styled.img`
  width: 5.3125rem;
`;

const HideOnScroll = styled.div`
  display: ${({ hide }) => hide ? "none": "block" };
`;







const NavBarMobile = () => {
  const [hideListBar, setHideListBar] = useState(false);


  const HideListBar = () => {
    if (window.scrollY >= 80.5) {
      setHideListBar(true);
    } else {
      setHideListBar(false);
    }
  };

  useEffect(()=> {
      window.addEventListener('scroll', HideListBar);

    },[])



  const [Button, setButton] = useState(false);
  return (
    <>
      <Container>
        <DivOne>
          <SubDIVOne>
            <SubDIVOneCon>
              <ToggleButton
                onClick={() => setButton((prevState) => !prevState)}
              >
                {Button ? (
                  <FaTimes size={"1.3rem"} />
                ) : (
                  <FaBars size={"1.3rem"} />
                )}
              </ToggleButton>
            </SubDIVOneCon>
            <SubDIVOneCon>
              <Image src={Logo} alt="image" />
            </SubDIVOneCon>
          </SubDIVOne>
          <SubDIVOne>
            <SubDIVOneCon>
              <TbBuildingStore size={"1.4rem"} color="#50545b" />
            </SubDIVOneCon>
            <SubDIVOneCon>
              <BsCart3 size={"1.4rem"} color="#50545b" />
            </SubDIVOneCon>
          </SubDIVOne>
        </DivOne>
        <DivTwo display={Button.toString()} hide={hideListBar}>
          <SearchBar
            bg={"#f2f2f2"}
            center={"center"}
            fullwidth={"100%"}
            fontsize={"0.75rem"}
          />
        </DivTwo>
        <HideOnScroll hide={hideListBar}>
          <DivThree display={Button.toString()}>
            <SubDIVThree>
              <TbDotsCircleHorizontal size={"1.4rem"} />
              <Para3>Browser All</Para3>
            </SubDIVThree>
            <SubDIVThree>
              <TbShirt size={"1.4rem"} />
              <Para3>Fashion</Para3>
            </SubDIVThree>
            <SubDIVThree>
              <BiMessageEdit size={"1.4rem"} />
              <Para3>Computers</Para3>
            </SubDIVThree>
            <SubDIVThree>
              <BsPhone size={"1.4rem"} />
              <Para3>Phones</Para3>
            </SubDIVThree>
            <SubDIVThree>
              <BsReplyAll size={"1.4rem"} />
              <Para3>All Deals</Para3>
            </SubDIVThree>
          </DivThree>
        </HideOnScroll>
      </Container>
      {Button && <SideDrawer />}
    </>
  );
};

export default NavBarMobile;
