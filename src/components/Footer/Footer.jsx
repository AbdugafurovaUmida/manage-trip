import React from 'react'
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';
import { Container } from '../../styled';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { ToggleButton } from 'react-bootstrap';
import { HiSun } from "react-icons/hi";
import { FiMoon } from "react-icons/fi";
import './Footer.css'
import { useTranslation } from 'react-i18next';


const FooterSection = styled.section`
background-color:${(props) => props.theme.FooterSectionBg} ;

`
const FooterContent = styled.div`
 margin-top: -264px;
    padding: 267px 0 150px 0;
    .btn-group{
        background-color:${(props) => props.theme.MoudeBg};
        border-radius: 10px;
        color:${(props) => props.theme.MoudeColor};
        padding:8px;
        .btn{
            background-color:${(props) => props.theme.MoudeBg}; 
            color:${(props) => props.theme.MoudebtnColor};
                transition: color .10s
        }
    }
 `
const FooterText = styled.p`
max-width:254px;
font-family: 'DM Sans';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.FooterText} ;
margin:20px 0px 24px 0px;
`

const FooterTitle = styled.h6`
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color:${(props) => props.theme.FooterTitle}; 
margin-bottom:18px;
 `
const FooterMenu = styled.ul`
padding:0px;
 `

const FooterMenuTitle = styled.li`
list-style:none;
a{
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.FooterMenuTitle};
    text-decoration:none;
},
a:not(:last-child){
    margin-bottom:16px;
}

 `


 const HeaderLogoDarkImg = styled.img`
 display:${(props) => props.theme.HeaderLogoDark};
 `
 
 const HeaderLogoLightImg = styled.img`
 display:${(props) => props.theme.HeaderLogoLight};
 `


 const SwitchButtons = styled.div`
 .btn-check:focus+.btn, .btn:focus{
     box-shadow:none;
     background-color:${(props) => props.theme.MoudeCheckBg};
    //  padding:6px;
    box-shadow: 0px 2px 2px rgba(67, 67, 67, 0.1);
border-radius: 8px;
color:${(props) => props.theme.MoudeCheckColor} ;

 }
 `
 
 

export const Footer = () => {

    const { t } = useTranslation()

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [value, setValue] = useState([1, 2]);

    const handleChange = (val) => setValue(val);


    return (
        <FooterSection>
            <FooterContent>
                <Container>
                    <Row>
                        <Col xs={4}>
                        <Link to='/'><HeaderLogoLightImg src="/assets/img/header-logo.svg" alt="header-logo" /></Link>
                        <Link to='/'><HeaderLogoDarkImg src="/assets/img/darklogo.svg" alt="header-logo"/></Link>
                            <FooterText>
                             {t('FooterText')}
                            </FooterText>
                            <SwitchButtons>
                              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                <ToggleButton id="tbg-btn-1"
                                    value={1}
                                    onClick={() => toggleTheme('light')}
                                    variant=""
                                >
                                    <HiSun />
                                </ToggleButton>
                                <ToggleButton id="tbg-btn-2"
                                    value={2}
                                    onClick={() => toggleTheme('dark')}
                                    variant=""
                                >
                                    <FiMoon />
                                </ToggleButton>
                            </ToggleButtonGroup>  
                            </SwitchButtons>
                            

                        </Col>
                        <Col xs={3}>
                            <FooterTitle>{t('Services')}</FooterTitle>
                            <FooterMenu>
                                <FooterMenuTitle><Link to='/'>{t('Travel-Booking')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Flight-Booking')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Car-Booking')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Fivestar-Hotel')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Traveling')}</Link></FooterMenuTitle>
                            </FooterMenu>
                        </Col>
                        <Col xs={3}>
                            <FooterTitle>{t('Support')}</FooterTitle>
                            <FooterMenu>
                                <FooterMenuTitle><Link to='/'>{t('Account')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Legal')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Contact')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Condition')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Privacy')}</Link></FooterMenuTitle>
                            </FooterMenu>
                        </Col>
                        <Col xs={2}>
                            <FooterTitle>{t('Business')}</FooterTitle>
                            <FooterMenu>
                                <FooterMenuTitle><Link to='/'>{t('Success')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('About')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Blog')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Information')}</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>{t('Travel-Guide')}</Link></FooterMenuTitle>
                            </FooterMenu>
                        </Col>
                    </Row>
                    {/* <Button onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>theme changer</Button>
                    <Card>This is card</Card> */}
                </Container>
            </FooterContent>
        </FooterSection>
    )
}
