import React from 'react';
import { AiFillGithub, AiFillLinkedin,AiOutlineMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {FiPhoneCall} from 'react-icons/fi';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

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
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linledin.com">
        <AiFillLinkedin size="3rem"/>
        </SocialIcons>
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
