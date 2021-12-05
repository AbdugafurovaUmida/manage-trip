import React from 'react'
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
// import { Button, Card } from '../../styled';
import styled from 'styled-components';
import { Container } from '../../styled';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { ToggleButton } from 'react-bootstrap';
import { HiSun } from "react-icons/hi";
import { FiMoon } from "react-icons/fi";
import './Footer.css'


const FooterSection = styled.section`
background-color: #F4F5F6;

`
const FooterContent = styled.div`
 margin-top: -264px;
    padding: 267px 0 150px 0;
 `
const FooterText = styled.p`
max-width:254px;
font-family: 'DM Sans';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #84878B;
margin:20px 0px 24px 0px;
`

const FooterTitle = styled.h6`
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #222529;
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
    color: #84878B;
    text-decoration:none;
},
a:not(:last-child){
    margin-bottom:16px;
}

 `
export const Footer = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [value, setValue] = useState([1, 2]);

    const handleChange = (val) => setValue(val);


    return (
        <FooterSection>
            <FooterContent>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <Link to='/'><img src="/assets/img/footer-logo.svg" alt="footer-logo" /></Link>
                            <FooterText>
                                This is the team that specializes in
                                making sure in the find it a
                                your interior looks cool
                            </FooterText>
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
           


                        </Col>
                        <Col xs={3}>
                            <FooterTitle>Services</FooterTitle>
                            <FooterMenu>
                                <FooterMenuTitle><Link to='/'>Travel Booking</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Flight Booking</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Car Booking</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Fivestar Hotel</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Traveling</Link></FooterMenuTitle>
                            </FooterMenu>
                        </Col>
                        <Col xs={3}>
                            <FooterTitle>Support</FooterTitle>
                            <FooterMenu>
                                <FooterMenuTitle><Link to='/'>Account</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Legal</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Contact</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Terms &#38; Condition</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Privacy Policy</Link></FooterMenuTitle>
                            </FooterMenu>
                        </Col>
                        <Col xs={2}>
                            <FooterTitle>Business</FooterTitle>
                            <FooterMenu>
                                <FooterMenuTitle><Link to='/'>Success</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>About Locato</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Blog</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Information</Link></FooterMenuTitle>
                                <FooterMenuTitle><Link to='/'>Travel Guide</Link></FooterMenuTitle>
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
