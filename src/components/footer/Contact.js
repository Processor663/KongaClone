import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width:768px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Round = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  width: 1.5rem;
  height: 1.5rem;
  display: ${({round_none})=> round_none ? "none" : "" };
`;

const Content = styled.div`
  margin-left: 0.5rem;
  color: #b5b5b5;
  font-size: 0.775rem;

  &:hover {
    color: #ffffff;
  }
`;

const Head = styled.div`
  font-weight:700;
`;

const Body = styled.div`
  margin-top: 0.2rem;

  @media screen and (max-width:768px) {
    margin-top: 0rem;
  }
`;




const Contact = ({ head, body, icon, round_none }) => {
  return (
    <Container>
      <Round round_none = {round_none}>{icon}</Round>
      <Content>
        <Head>{head}</Head>
        <Body>{body}</Body>
      </Content>
    </Container>
  );
};
export default Contact;