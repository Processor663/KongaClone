import React from "react";
import {
  Button,
  ButtonContainer,
  Container2,
  FlexContainer,
  Heading,
  IconsContainer,
  ItemsContainer,
  List,
  ListItems,
  ListItemsSpan,
  Para,
  ParaContainer,
} from "./SideDrawer.styled";
import { TfiLocationPin } from "react-icons/tfi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { TbBuildingStore } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { BsStar } from "react-icons/bs";

const SideDrawer = () => {
  return (
    <div>
      <ButtonContainer>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </ButtonContainer>
      <FlexContainer>
        <ItemsContainer>
          <IconsContainer>
            <TfiLocationPin size={"1.5rem"} />
          </IconsContainer>
          <ParaContainer>
            <IconsContainer>Track Orders</IconsContainer>
            <Para>View order status</Para>
          </ParaContainer>
        </ItemsContainer>
        <ItemsContainer>
          <IconsContainer><BsStar size={"1.5rem"} /></IconsContainer>
          <ParaContainer>
            <IconsContainer>Pending Items</IconsContainer>
          </ParaContainer>
        </ItemsContainer>
        <ItemsContainer>
          <IconsContainer>
            <BiPurchaseTagAlt size={"1.5rem"} />
          </IconsContainer>
          <ParaContainer>
            <IconsContainer>Sell on Konga</IconsContainer>
            <Para>Join other merchants</Para>
          </ParaContainer>
        </ItemsContainer>
        <ItemsContainer>
          <IconsContainer>
            <TbBuildingStore size={"1.5rem"} />
          </IconsContainer>
          <ParaContainer>
            <IconsContainer>Physical Stores</IconsContainer>
            <Para>Stores around you</Para>
          </ParaContainer>
        </ItemsContainer>
      </FlexContainer>
      <Container2>
        <Heading>Categories</Heading>
        <List>
          <ListItems>
            <ListItemsSpan>Computers and Accessories</ListItemsSpan>
            <ListItemsSpan>
              <AiOutlineRight size={"1.4rem"} />
            </ListItemsSpan>
          </ListItems>
          <ListItems>
            <ListItemsSpan>Phones and Tablets</ListItemsSpan>
            <ListItemsSpan>
              <AiOutlineRight size={"1.4rem"} />
            </ListItemsSpan>
          </ListItems>
          <ListItems>
            <ListItemsSpan>Electronics</ListItemsSpan>
            <ListItemsSpan>
              <AiOutlineRight size={"1.4rem"} />
            </ListItemsSpan>
          </ListItems>
          <ListItems>
            <ListItemsSpan>Konga Fashion</ListItemsSpan>
            <ListItemsSpan>
              <AiOutlineRight size="1.4rem" />
            </ListItemsSpan>
          </ListItems>
          <ListItems>
            <ListItemsSpan> Home and Kitchen</ListItemsSpan>
            <ListItemsSpan>
              <AiOutlineRight size="1.4rem" />
            </ListItemsSpan>
          </ListItems>
          <ListItems>
            <ListItemsSpan> Baby, Kids and Toys</ListItemsSpan>
            <ListItemsSpan>
              <AiOutlineRight size="1.4rem" />
            </ListItemsSpan>
          </ListItems>
          <ListItems>
            <ListItemsSpan> Other Categories</ListItemsSpan>
            <ListItemsSpan>
              <AiOutlineRight size="1.4rem" />
            </ListItemsSpan>
          </ListItems>
          <ListItems>
            <ListItemsSpan> Intel 11th Gen Campaign</ListItemsSpan>
            <ListItemsSpan>
              <AiOutlineRight size={"1.4rem"} />
            </ListItemsSpan>
          </ListItems>
        </List>
      </Container2>
    </div>
  );
};
export default SideDrawer;
