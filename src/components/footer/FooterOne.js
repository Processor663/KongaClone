import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import { AiOutlineLaptop } from "react-icons/ai";
import SearchBar from '../navContainer/SearchBar';

// Icons
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdCall, MdAccessTime } from "react-icons/md";






const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2e2e2e;
  padding: 1rem 1.2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
  }
`;


const SearchBarContainer = styled.div`
  display: flex;
  min-width: 15.625rem;
  min-height: 3rem;
  margin-top: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`; 

const Input = styled.input`
  padding: 0rem 0rem 0rem 0.5rem;
  border-radius: 4px 0px 0px 4px;
  border: none;

  &:focus {
    border: none;
    outline: none;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`; 

const Button = styled.button`
  background-color: #ed017f;
  color: #ffffff;
  font-weight: 500;
  border: none;
  padding: 0rem 0.8rem;
  border-radius: 0px 4px 4px 0px;

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`; 
 





const footerOne = () => {
  return (
    <Container>
      <Contact
        icon={<FaEnvelope size="0.8rem" />}
        head="EMAIL SUPPORT"
        body="miracleama17@gmail.com"
      />
      <Contact
        icon={<MdCall />}
        head="PHONE SUPPORT"
        body="0814 429 6476, 0814 429 6476, 0814 429 6476"
      />
      <Contact
        icon={<FaWhatsapp />}
        head="WHATSAPP"
        body="0814 429 6476, 0814 429 6476"
      />
      <Contact
        icon={<MdAccessTime />}
        head="GET LATEST DEALS"
        body="Our best promotions sent to your inbox."
      />
      <SearchBarContainer>
        <Input type="search" placeholder="Email Address" />
        <Button>Subscribe</Button>
      </SearchBarContainer>
    </Container>
  );
}

export default footerOne