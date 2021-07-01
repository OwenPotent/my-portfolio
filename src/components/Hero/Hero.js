import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Website!
      </SectionTitle>
      <SectionText>
        I'm Owen, a Gachatuber who intends to make Gacha Memes, GCMVs and more. I also love to code alot, which is why I made this website, and setted up everything.
      </SectionText>
      <Button onClick={() => window.location = '#tech'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;