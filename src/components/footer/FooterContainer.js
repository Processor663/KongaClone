import React from 'react';
import styled from 'styled-components';
import FooterOne from "./FooterOne";
import FooterTwo from './FooterTwo';


const Container = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const FooterContainer = () => {
  return (
    <Container>
        <FooterOne />
        <FooterTwo />
    </Container>
  )
}

export default FooterContainer