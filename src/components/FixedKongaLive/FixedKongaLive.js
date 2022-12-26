import React from 'react';
// STYLES
import styled, {keyframes} from 'styled-components';

// ICON
import { BsPlayBtn } from "react-icons/bs";



const Animate = keyframes`
0% {
  transform: scale(1.2);
}

`;



const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  position: fixed;
  top: 70%;
  padding-right: 3rem;
  z-index: 9999;

  @media screen and (max-width: 768px) {
    // top: 65%;
    padding-right: 1.5rem;
  }
`;


const SubContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation-name: ${Animate};
  transition-timing-function: linear;
  animation-duration: 1.1s;
  animation-iteration-count: infinite;


`;

const WriteUp = styled.div`
  margin: auto;
  color: #fffeff;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Round = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.575rem;
  height: 4.375rem;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.38);


  @media screen and (max-width: 768px) {
    width: 3.375rem;
    height: 3.375rem;
  }
`;


const FixedKongaLive = () => {
  return (
    <Container>
      <SubContainer>
        <WriteUp>Konga Live</WriteUp>
          <Round>
            <BsPlayBtn size={"2rem"} color="ed017f" />
          </Round>
      </SubContainer>
    </Container>
  );
}

export default FixedKongaLive;