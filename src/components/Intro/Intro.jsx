import { useTranslation } from "react-i18next";
import React from 'react';
import styled from 'styled-components';
import { Container } from "../../styled";

const IntroSection = styled.div`
   background-image:url(../assets/img/intro-bg.jpg);
   background-size:cover;
   background-repeat:no-repeat;
   padding:141px 0 197px 0px;
   background-position:center;
  
`;

const IntroTitle = styled.h1`
max-width:487px;
font-family:Poppins;
font-weight: bold;
font-size: 64px;
line-height: 80px;
letter-spacing: -0.005em;
z-index:333;
color: #3B3E44;
text-shadow: 0px 8px 16px rgba(51, 51, 51, 0.08);
`;

const Intro = () => {
    const { t } = useTranslation()
    return (
        <IntroSection>
            <Container>
            <IntroTitle>
            {t('intro_title')}
            </IntroTitle>
            </Container>
        </IntroSection>
        
    )
}
export default Intro;
