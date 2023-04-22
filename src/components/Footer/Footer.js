import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Button from "../../styles/GlobalComponents/Button";

import { SocialIcons } from "../Header/HeaderStyles";
import { FiPhoneCall } from "react-icons/fi";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Div4,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <FiPhoneCall size="3rem" />
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:7987572664">7987572664</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <AiOutlineMail size="3rem" />
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:amandekate007@gmail.com">
            amandekate007@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <Div4>
          <p>Here's my Resume</p>
          <Button
            onClick={() =>
              (window.location =
                "https://drive.google.com/file/d/1iqMKnA1gM69tUxLFENeSAwE6Pdgs8c45/view?usp=share_link")
            }
          >
            Resume
          </Button>
        </Div4>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/amandekate">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/aman-dekate-1b8254195/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
