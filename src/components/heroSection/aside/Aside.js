import React from 'react'
import styled from 'styled-components';
import Image1 from "../../assets/aside/aside1.gif";
import Image2 from "../../assets/aside/aside2.gif";
import Image3 from "../../assets/aside/aside3.gif";
import Image4 from "../../assets/aside/aside4.webp";






const Container = styled.div`
  width: 100%;
  @media screen and (max-width: 998px) {
  }
`;

const SubContainer = styled.div`
  width: 11.5rem;
  margin-left: 1rem;
  @media screen and (max-width: 998px) {
    width: 48%;
    margin-left: 0rem;
  }
`;

const SubDivider = styled.div`
  display: flex;
  justify-content:space-evenly;
  margin-top: 1rem;
`;

const Img = styled.img`
  width:100%;
  border-radius:8px;

`;


const Aside = () => {
  return (
    <div>
      <Container>
        <SubDivider>
          <SubContainer>
            <Img src={Image1} />
          </SubContainer>
          <SubContainer>
            <Img src={Image2} />
          </SubContainer>
        </SubDivider>
        <SubDivider>
          <SubContainer>
            <Img src={Image3} />
          </SubContainer>
          <SubContainer>
            <Img src={Image4} />
          </SubContainer>
        </SubDivider>
      </Container>
    </div>
  );
}

export default Aside;