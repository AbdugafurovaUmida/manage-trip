import { useTranslation } from "react-i18next";
import React from "react";
import './Header.css';
import { Row, Col } from "react-bootstrap";
import i18next from "i18next";
import 'react-calendar/dist/Calendar.css';
import { FaRegBell } from "react-icons/fa";
import { BsCheck } from "react-icons/bs"
import { TiDeleteOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { DropdownBellBody } from "../../styled";
import { BellNotificationText} from "../../styled";
import { DropdownProfile } from "../../styled";
import { ProfileDropdownBody } from "../../styled"
import { ProfileDropdownHeader} from "../../styled"


const HeaderSection = styled.header`
background-color: ${(props) => props.theme.HaederBack};
box-shadow: 0px -1px 4px #E2E2EA;
padding: 20px 40px;
`
const LanguageDropdown = styled.div`
vertical-align: middle;
display: inline-block;
position: relative;
z-index:333;
`
const LanguageDropdownHeader = styled.div`
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
`
const LanguageDropdownBody = styled.div`
padding: 44px 30px 20px 24px;
background-color:${(props) => props.theme.CurrencyBody};
display: none;
z-index: 111;
width:335px;
right: -150px;
top:30px;
width: 314px;
max-height: 416px;
border:${(props) => props.theme.CurrencyBodyBorder};
box-shadow: 0px 32px 60px -32px rgba(0, 0, 0, 0.1);
border-radius: 16px;
position: absolute;
`
const LanguageDropdownBodyIcon = styled.div`
color:  #84878B;
position: absolute;
font-size: 25px;
top: 10px;
right: 15px;
`
const LanguageButton = styled.div`
width: 100%;
border: transparent;
background-color: transparent;
padding: 10px 5px;
display: block;
display: flex;
align-items:center;
justify-content: space-between !important;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color:${(props) => props.theme.LanguageColor};
&:active{
    background-color:${(props) => props.theme.LanguageButtonActivBg} ;
    border-radius: 8px;
}
`
const LngDropdownImage = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
margin-right:16px;
margin-left:10px;
`

const LanguageIcon = styled.span`
margin-left: auto;
text-align: center;
line-height: 0.3px;
padding-top: 1.5px;
display: inline-block;
background-color: #145CE6;
color: #fff;
width: 20px;
height: 20px;
border-radius: 50%;
padding-right:5px;
`

const BellDropdown = styled.div`
position:relative;
vertical-align: middle;
display: inline-block;
z-index:333;
`

const BellDropdownBtn = styled.button`
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
background-color: transparent;
color: ${(props) => props.theme.BelldropdownColor} ;
font-size: 17px;
padding-right: 14px;
border: transparent;
border-right: ${(props) => props.theme.BellDropdownBorderRight};
margin-right: 20px;
position: relative;
span{
    width: 10px;
    height: 10px;
    background-color: red;
    color: white;
    position: absolute;
    top: 0;
    right: 12px;
    border-radius: 50%;
    font-weight: 500;
    font-size: 6px;
}
`
const BellNotification = styled.div`
padding: 7px 46px 20px 56px;
    span{
        font-family: 'DM Sans';
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #B1B5C4;
    }
&:active{
    background-color: #F4F5F6;
    border-radius: 7px;
    p{
        color: #3B3E44;
        
    }
 
}
`
const CurrencyDropdown = styled.button`
background-color:transparent;
border:transparent;
position:relative;
z-index:333;
`

const CurrencyDropdownBody = styled.div`
display:none;
position:absolute;
left:-20px;
border: ${(props) => props.theme.CurrencyBodyBorder} ;
box-sizing: border-box;
box-shadow: 0px 32px 60px -32px rgba(0, 0, 0, 0.1);
border-radius: 16px;
top:35px;
padding:30px 10px 20px 10px;
background-color:${(props) => props.theme.CurrencyBody} ;
font-weight: 500;
font-size: 18px;
line-height: 23px;
width:150px;
`

const CurrencyDropdownHeader = styled.div`
vertical-align: middle;
background: transparent;
border: none;
transition: linear 0.1s;
font-family: Roboto;
font-weight: bold;
font-size: 14px;
line-height: 20px;
color: ${(props) => props.theme.CurrencyHeader};
`

const CurrencyItem = styled.div`
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: ${(props) => props.theme.CurrencyColor};
padding:12px 18px 12px 18px;
display:flex;
justify-content:space-between;
&:active{
    background-color:${(props) => props.theme.CurrencyActiveBg} ;
    border-radius: 8px;
  
}
`

const HeaderLogoDarkImg = styled.img`
display:${(props) => props.theme.HeaderLogoDark};
`

const HeaderLogoLightImg = styled.img`
display:${(props) => props.theme.HeaderLogoLight};
`


const Header = () => {

    const { t } = useTranslation()

    // ========= Currency Dropdown =======

    const dataCurrency = [{ id: 0, label: "UZS" }, { id: 1, label: "RUBL" }, { id: 2, label: "USD" }];

    const [isCurrencyOpen, setCurrencyOpen] = useState(false);
    const [currency, setCurrency] = useState(dataCurrency);
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    const currencyDropdown = () => setCurrencyOpen(!isCurrencyOpen);

    const handleCurrencyClick = (id) => {
        selectedCurrency === id ? setSelectedCurrency(null) : setSelectedCurrency(id);
        setCurrencyOpen(false);
        setCurrency(currency)
    }

    // ========= Language Dropdown =======

    const [isLanguageOpen, setLanguageOpen] = useState(false);
    const [language, setLanguage] = useState('english-flag');

    const languageDropdown = () => setLanguageOpen(!isLanguageOpen);

    const handleLanguageClick = (id) => {
        setLanguageOpen(false);
    }

    // ========= Profile Dropdown ========

    const [isProfilesOpen, setProfilesOpen] = useState(false);
    const ProfileDropdown = () => setProfilesOpen(!isProfilesOpen);

    // ========bell dropdown
    const bellDropdown = () => setBellOpen(!isBellOpen);
    const [isBellOpen, setBellOpen] = useState(false);

    return (
        <HeaderSection>
            <Row className='d-flex'>
                <Col lg="4">
                    <Link to='/'><HeaderLogoLightImg src="/assets/img/header-logo.svg" alt="header-logo" /></Link>
                    <Link to='/'><HeaderLogoDarkImg src="/assets/img/darklogo.svg" alt="header-logo"/></Link>
                </Col>
                <Col lg="8" className="d-flex justify-content-end align-items-center">

                    {/* currency Dropdown */}
                    <CurrencyDropdown>
                        <CurrencyDropdownHeader onClick={currencyDropdown}>
                            {selectedCurrency ? currency.find(item => item.id == selectedCurrency).label : "USD" }
                        </CurrencyDropdownHeader>
                        < CurrencyDropdownBody className={`dropdown-body ${isCurrencyOpen && 'open'}`} >
                        <LanguageDropdownBodyIcon onClick={currencyDropdown}><TiDeleteOutline /></LanguageDropdownBodyIcon>
                            {currency.map((item, i) => (
                                <CurrencyItem onClick={e => handleCurrencyClick(e.target.id)} id={item.id} >
                                   {item.label}
                                  <LanguageIcon ><BsCheck /></LanguageIcon>
                                </CurrencyItem >
                                 ))}
                   </ CurrencyDropdownBody>
                    </CurrencyDropdown>

                    <LanguageDropdown >
                        <LanguageDropdownHeader onClick={languageDropdown}>
                            <LngDropdownImage onClick={handleLanguageClick} src={`/assets/img/${language}.png`} alt='flag' style={{ width: '20px', height: '20px' }} />
                        </LanguageDropdownHeader>
                        <LanguageDropdownBody className={`dropdown-body-language ${isLanguageOpen && 'open'}`}>
                            <LanguageDropdownBodyIcon onClick={languageDropdown}><TiDeleteOutline /></LanguageDropdownBodyIcon>
                            <LanguageButton type="button" onClick={(el) => {
                                i18next.changeLanguage('ru') && setLanguage('russian-flag');
                            }}>
                                <LngDropdownImage src="/assets/img/russian-flag.png" alt="russian-flag" />
                                Russin (ru)
                                <LanguageIcon ><BsCheck /></LanguageIcon>
                            </LanguageButton>
                            <LanguageButton type="button" onClick={(el) => {
                                i18next.changeLanguage('en') && setLanguage('english-flag');
                            }}>
                                <LngDropdownImage src="/assets/img/english-flag.png" alt="english-flag" />
                                English (us)
                                <LanguageIcon ><BsCheck /></LanguageIcon>
                            </LanguageButton>
                            <LanguageButton type="button" onClick={(el) => {
                                i18next.changeLanguage('uz') && setLanguage('uzbekistan-flag');
                            }}>
                                <LngDropdownImage src="/assets/img/uzbekistan-flag.png" alt="uzbekistan-flag" />
                                Uzbek (uz)
                                <LanguageIcon ><BsCheck /></LanguageIcon>
                            </LanguageButton>
                        </LanguageDropdownBody>
                    </LanguageDropdown>

                    {/* bell dropdown */}
                    <BellDropdown >
                        <BellDropdownBtn type='button' onClick={bellDropdown}>
                            <FaRegBell />
                            <span>1</span>
                        </BellDropdownBtn>
                        <DropdownBellBody className={`dropdown-body_bell ${isBellOpen && 'open'}`}>
                            <BellNotification>
                                <BellNotificationText >{t('notification-dropdown')}</BellNotificationText>
                                <span>4 {t('notification-date')}</span>
                            </BellNotification>
                            <BellNotification>
                                <BellNotificationText>{t('notification-dropdown')}</BellNotificationText>
                                <span >4 {t('notification-date')}</span>
                            </BellNotification>
                            <BellNotification>
                                <BellNotificationText >{t('notification-dropdown')}</BellNotificationText>
                                <span >4 {t('notification-date')}</span>
                            </BellNotification>
                            <BellNotification>
                                <BellNotificationText >{t('notification-dropdown')}</BellNotificationText>
                                <span>4 {t('notification-date')}</span>
                            </BellNotification>
                        </DropdownBellBody>
                    </BellDropdown>

                    {/* Profile dropdown */}

                    <DropdownProfile >
                        <ProfileDropdownHeader onClick={ProfileDropdown}>
                            <img src="/assets/img/delowar.svg" alt='profile' />
                            <h3 >Delowar</h3>
                            <IoMdArrowDropdown className={`${isProfilesOpen && "open"}`} />
                        </ProfileDropdownHeader>
                        <ProfileDropdownBody className={`dropdown-profile-body ${isProfilesOpen && 'open'}`}>
                            <div><span><CgProfile /></span> <Link to='/profile'>{t('dropdown_profile')}</Link></div>
                            <div><span><BiLogOutCircle /></span> <p>{t('dropdown_sing_out')}</p></div>
                        </ProfileDropdownBody>
                    </DropdownProfile>
                </Col>
            </Row>
        </HeaderSection>
    );
}

export default Header;
