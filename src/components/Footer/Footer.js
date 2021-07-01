import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sheanowen3@gmail.com">sheanowen3@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>A single code can change the world</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/owenpotent">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://youtube.com/owenpotent">
          <AiFillYoutube size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/shean_owen12">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
