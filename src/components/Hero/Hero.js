import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        AMAN's Portfolio
      </SectionTitle>
      <SectionText>
        Full Stack Developer looking for hands opportunity in designing,
        developing, and implementing applications and solutions using a range of
        technologies and programming languages. Seeking to leverage broad
        development
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1iqMKnA1gM69tUxLFENeSAwE6Pdgs8c45/view?usp=share_link")
        }
      >
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
