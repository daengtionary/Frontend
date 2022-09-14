
import React from "react";
import {
  FooterContainer,
  FooterBox,
  ListBox,
  Logo,
  ListWrap,
  Ulist,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <Logo>Logo</Logo>
        <ListWrap>
          <ListBox>
            <Ulist>
              <li>Project Name</li>
              <li>댕과사전</li>
            </Ulist>
          </ListBox>
          <ListBox>
            <Ulist>
              <li>Frontend</li>
              <li>김민석</li>
              <li>박재정</li>
              <li>하병노</li>
            </Ulist>
          </ListBox>
          <ListBox>
            <Ulist>
              <li>Backend</li>
              <li>박진우</li>
              <li>한동훈</li>
              <li>안승현</li>
            </Ulist>
          </ListBox>
          <ListBox>
            <Ulist>
              <li>Designer</li>
              <li>오소영</li>
            </Ulist>
          </ListBox>
        </ListWrap>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;

