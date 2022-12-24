import React from "react";
import Caro from "./caro/Caro";
import Aside from "./aside/Aside";

// Icons 
import { FaGg, FaRegPaperPlane } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { BsBagCheck } from "react-icons/bs";

// StyledComponents
import styled from "styled-components";




// Styles from Styled Components
const Container = styled.div`
  background-color: #f2f2f2;

  padding: 1rem 0rem 1rem 0rem;
  @media screen and (max-width: 998px) {
    padding: 1rem 0rem 1rem 0rem;
  }
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 998px) {
    flex-wrap: wrap;
  }
`;
 
const Down = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 1rem 0rem;

  @media screen and (max-width: 998px) {
    display: none;
  }
`;

const SubDown = styled.div`
  display: flex;
  justify-content: space-center;
  align-items: center;
  background: #fff;
  border: 0.0625rem solid rgba(0, 0, 0, 0.05);
  border-radius: 0.3125rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);
  padding: 0.8125rem 1.5625rem;
`;

const DownPara = styled.div`
margin-left:1.8rem;
`;

const heroSection = () => {
  return (
    <Container>
      <SubContainer>
        <Caro />
        <Aside />
      </SubContainer>
      <Down>
        <SubDown>
          <div>
            <AiOutlineLaptop color="#ed60a0" />
          </div>
          <DownPara> Konga Blog</DownPara>
        </SubDown>
        <SubDown>
          <div>
            <FaGg color="#ed60a0" />
          </div>
          <DownPara> Pay Bills</DownPara>
        </SubDown>
        <SubDown>
          <div>
            <FiTruck color="#ed60a0" />
          </div>
          <DownPara> Free Delivery</DownPara>
        </SubDown>
        <SubDown>
          <div>
            <TbBuildingStore color="#ed60a0" />
          </div>
          <DownPara> Offline Store</DownPara>
        </SubDown>
        <SubDown>
          <div>
            <BsBagCheck color="#ed60a0" />
          </div>
          <DownPara> Brand Store</DownPara>
        </SubDown>
        <SubDown>
          <div>
            <FaRegPaperPlane color="#ed60a0" />
          </div>
          <DownPara> Book Flights</DownPara>
        </SubDown>
      </Down>
    </Container>
  );
};

export default heroSection;
