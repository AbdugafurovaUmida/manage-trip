import React from 'react'
import { Container } from '../../styled';
import styled from 'styled-components';
import './SearchNavbar.css'
import { FaBed } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { IoMdCar } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef, useEffect } from 'react';
import Select, { components } from 'react-select'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgArrowsExchange } from "react-icons/cg";
import Calendar from "react-calendar";
import { useTranslation } from 'react-i18next';
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';






const CheckTravelers = styled.div`
display:flex;
align-items:end;
margin-top: 26px;
.react-calendar&{
    background-color:${(props) => props.theme.CalendarBg}!important;
}
`

const CheckFilter = styled.div`
position: relative;
background-color:${(props) => props.theme.CheckFilterBg} ;
padding: 10px 48px 9px 24px;
border-radius: 8px;
white-space:nowrap;
text-overflow:ellipsis;
font-family: 'DM Sans';
font-weight: 500;
font-size: 18px;
line-height: 23px;
color:${(props) => props.theme.CheckFilterColor};
&:not(:last-child) {
    margin-right: 8px;
}
.css-b62m3t-container{
    width:220px;
}
.css-319lph-ValueContainer {
    padding:0;
}
.css-6j8wv5-Input{
    padding:0;
    margin:0;
}
.css-tlfecz-indicatorContainer {
    padding:0;
}
.css-1s2u09g-control{
    min-height:19px;
    padding-top:6px;
    background-color:transparent;
    border:transparent;
    &:selected{
        min-height:10px;
        padding-top:8px;
        background-color:transparent;
        border:transparent;
    }
}
.css-1hb7zxy-IndicatorsContainer {
    display:none;
}
.css-14el2xx-placeholder {
    color:${(props) => props.theme.CheckInputColor};
    font-weight: normal;
font-size: 16px;
line-height: 24px;
}
.css-1okebmr-indicatorSeparator {
    background-color:transparent;
    border:transparent;
    margin:0;
}
.css-26l3qy-menu {
    width:400px;
    font-size:16px;
    background-color:${(props) => props.theme.SelectMenuBg};
    color:${(props) => props.theme.SelectMenuColor};
    .css-1n7v3ny-option {
        background-color:transparent !important;
        color:grey;
        :active{
            background-color:transparent !important;
        }
       
    }
    ::-webkit-scrollbar { 
        display: none; 
    }
}
.css-1pahdxg-control{
    border-color:transparent;
    display:block;
    box-shadow:none;
    background-color:transparent;
    min-height:0;
    :hover{
        border:1px solid transparent;
        
    }
.css-1n7v3ny-option {
    background-color:#404858;
    opacity:0.8;
}
.css-qc6sy-singleValue{
    color:${(props) => props.theme.CheckInputColor};
    font-weight: normal;
font-size: 16px;
}
.css-tlfecz-indicatorContainer {
    display:none;
}

}
`

const PassengerDropdown = styled.div`
display: flex;
align-items: center;
`


const PassengerDropdownHeader = styled.div`
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'DM Sans';
font-weight: 500;
font-size: 16px;
line-height: 23px;
color: #3B3E44;
margin-right: 3px;
span{
    display: inline-block;
    color:${(props) => props.theme.PassengerDropdownHeaderColor};
    margin-right:6px;
},
p{
    margin: 0;
    color:${(props) => props.theme.PassengerDropdownHeaderColor};
    font-size: 18px;
    line-height: 23px
    font-weight: 500;
    margin-right:10px;
    
}
.passenger-icon {
    color:${(props) => props.theme.PassengerDropdownHeaderIcon};
    font-size:15px;
    
}
`

const PassengerDropdownBody = styled.div`
padding: 16px 29px 21px 29px;
    width: 354px;
    height: 224px;
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
    border-radius: 16px;
    position: absolute;
    margin-top: -340px;
    right: 0;
    background-color:${(props) => props.theme.PassengerDropdownBg} ;
    border-top: 1px solid #E5E8EC;
    display: none;
    z-index: 111;
`

const PassengerFilter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 9px 0;
:not(:last-child) {
    
    border-bottom: ${(props) => props.theme.PassengerFilterColor};
}
`


const PassengerData = styled.div`

`

const PassengerDataTitle = styled.h6`
font-family: 'DM Sans';
font-weight: 500;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.PassengerDropdownColor} ;
margin: 0;
`

const PassengerDataInfo = styled.span`
font-family: 'DM Sans';
font-weight: normal;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.PassengerDataInfoColor}  ;
`

const PassengerQuantity = styled.div`
display: inline-block;
font-weight: 500;
font-size: 16px;
line-height: 23px;
color: #3B3E44;
margin-right: 3px;
font-family: 'DM Sans';
div{
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #777E91;
    display:inline-block;
}
`

const PassengerAmount = styled.div`
font-family: 'Roboto';
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: #777E91;
`
const PassengerPlusButton = styled.button`
background-color: transparent;
width: 30px;
height: 30px;
border-radius: 50%;
display: inline-block;
border: 1px solid #B1B5C4;
text-align: center;
color: #B1B5C4;
margin-left: 12px;
`


const PassengerMinusButton = styled.button`
height: 30px;
border-radius: 50%;
display: inline-block;
border: 1px solid #E6E8EC;
text-align: center;
color: #E6E8EC;
margin-right: 12px;
background-color: transparent;
width: 30px;
`


const ArrowCircle = styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:${(props) => props.theme.ArrowCircleBg};
    text-align:center;
    position:absolute;
    right:-20px;
    z-index:333;
    bottom:34%;
    font-size:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${(props) => props.theme.ArrowCircleColor};
`


const SearchNav = styled.div`
    display:inline;
    display:flex;
    justify-content:flex-end;
    text-align:end;
    button{
        padding:21px 42px 23px 42px;
        margin-left:50px;
        border:transparent;
        background-color: #3B71FE;
        border-radius: 10px;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        font-family: 'DM Sans';
        text-align:right;
    }
`

const TabStyle = styled.div`
color:#84878B;
font-weight: bold;
font-size: 15px;
line-height: 18px;
small{
    font-size: 25px;
    margin-right:6px;
}
.react-tabs__tab--selected &{
    color:${(props) => props.theme.TabStyleSelectedColor}!important;
   padding:0;
}
`

const TabListStyle = styled.div`
.react-tabs__tab.react-tabs__tab--selected{
   border-bottom:2px solid #145CE6;
}
`

const TabContentStyle = styled.div`
.react-tabs__tab-list&{
    border-bottom:${(props) => props.theme.TabContentBorder} ;
    margin:0 0 5px 0; 
},
.react-tabs__tab{
    padding: 0;
    padding-bottom:15px;
    color: #3B3E44;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    &:not(:last-child){
        margin-right:40px;
    }
}
`






const SearchFilter = styled.div`
    position:relative;
    bottom:100px;
    z-index:222;
    // display:flex;
    // flex-wrap:wrap;
    // align-items:end;
    background-color:${(props) => props.theme.SearchFilterBg};
    // justify-content:space-between;
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
    border-radius: 20px;
    padding: 30px 60px;
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
`

const CheckInput = styled.input`
border:none;
background-color:transparent;
position:relative;
font-weight: normal;
font-size: 16px;
line-height: 24px;
padding-top:6px;
color:${(props) => props.theme.CheckInputColor} ;
`

const CalendarModal = styled.div`
position:relative;
.react-calendar{
    background-color:red;
}

`

const SearchNavbar = () => {

    const locationIcon = <HiOutlineLocationMarker />

    const navigate = useNavigate();
    const { t } = useTranslation()

    const [isPassengerOpen, setPassengerOpen] = useState(false);

    const passengerDropdown = () => setPassengerOpen(!isPassengerOpen);

// ======= Refs ======
    const selectRef = useRef(null);
    const checkinRef = useRef(new Date());
    const checkoutRef = useRef();

    // =======Calendar========

    // const [isCalendarOpen, setCalendarOpen] = useState(false);
    // const calendarDropdown = () => setCalendarOpen(!isCalendarOpen);
    const [date, setDate] = useState(null);
    const [endDate, setEndDate] = useState(null)


    // =======Select==========

    const { Option } = components;
    const IconOption = props => (
      <Option {...props}>
          <div style={{display:'flex'}}>
        <HiOutlineLocationMarker  style={{margin:'10px 10px 0px 0px',color:'#B1B5C4',fontSize:'20px'}}/>
         <p style={{marginBottom:'0'}}> {props.data.name}</p>
         </div>
        <p style={{paddingLeft:'30px',margin:'0'}}>{props.data.label}</p>
      </Option>
    );

    const options = [
        { value: "1", label: "Dubai Emirate, United Arab Emirates", name: "Dubai", icon: locationIcon },
        { value: "2", label: "Qatar", name: "Doha", icon: locationIcon },
        { value: "3", label: "Sydney, New South Wales, Australia", name: "Darling Harbour", icon: locationIcon },
        { value: "4", label: "Bangladesh", name: "Dhaka", icon: locationIcon },
        { value: "5", label: "Dubai, Dubai Emirate, United Arab Emirates", name: "Dubai International Airport", icon: locationIcon },
    ];

    // ===========Modal==========


    const [show, setShow] = useState(false);

    const [showCheckOut, setShowCheckOut] = useState(false)

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
        
    }

    const handleCheckOut = () => setShowCheckOut(true);


    const handleCloseCheckOut = () => setShowCheckOut(false);

    // ========= Form =======
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectRef.current.props.value)
        console.log(checkinRef.current.value)
        console.log(checkoutRef.current.value)
        setTimeout(() => {
        navigate('/hotel-list')
        }, 3000);
        
    }



    useEffect(() => {
        selectRef.current.value = 'where are your from?';
        checkinRef.current.value = 'Add-date';
        checkoutRef.current.value = 'Add-date';
    }, [])


    // ========== Passenger Function =========


    const [adult, setAdult] = useState(1)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    const total = adult + children + infants;


    const incrementAdult = () => setAdult(adult + 1);
    const decrementAdult = () => setAdult(adult > 0 ? adult - 1 : 0);

    const incrementChildren = () => setChildren(children + 1);
    const decrementChildren = () => setChildren(children > 0 ? children - 1 : 0);

    const incrementInfant = () => setInfants(infants + 1);
    const decrementInfant = () => setInfants(infants > 0 ? infants - 1 : 0);

    return (
        <Container>
            <SearchFilter>
                <Tabs style={{width:'80%'}}>
                    <TabListStyle >
                        <TabContentStyle >
                            <TabList style={{display:'flex', justifyContent:'space-between'}}>
                                <div>
                                <Tab> <TabStyle>
                                    <FaBed style={{ marginRight: '8px', fontSize: '20px' }} />
                                    {t('nav-hotel')}
                                </TabStyle> </Tab>
                                <Tab><TabStyle>
                                    <small><RiFlightTakeoffFill /></small>
                                    {t('nav-flight')}
                                </TabStyle></Tab>
                                <Tab><TabStyle>
                                    <small><IoMdCar /></small>
                                    {t('nav-rental-car')}
                                   
                                </TabStyle></Tab>
                                </div>
                               
                                <Tab><TabStyle style={{display:'flex'}}>
                                <PassengerDropdown  >
                        <PassengerDropdownHeader onClick={passengerDropdown}>
                            <span >{total}</span>
                            <p>{t('passenger_title')}</p>
                            <IoIosArrowDown className={`passenger-icon ${isPassengerOpen && "open"}`} />
                        </PassengerDropdownHeader>
                        <PassengerDropdownBody className={`passenger-dropdown-body ${isPassengerOpen && 'open'}`}>
                            <PassengerFilter >
                                <PassengerData >
                                    <PassengerDataTitle >
                                        {t('passenger-adults')}
                                    </PassengerDataTitle>
                                    <PassengerDataInfo>
                                        {t('passenger-adult-data')}
                                    </PassengerDataInfo>
                                </PassengerData>
                                <PassengerQuantity >
                                    <PassengerMinusButton type='button' onClick={decrementAdult}>-</PassengerMinusButton>
                                    <PassengerAmount >{adult}</PassengerAmount>
                                    <PassengerPlusButton type='button' onClick={incrementAdult}>+</PassengerPlusButton>
                                </PassengerQuantity>
                            </PassengerFilter >
                            <PassengerFilter >
                                <PassengerData >
                                    <PassengerDataTitle>
                                        {t('passenger-children')}
                                    </PassengerDataTitle>
                                    <PassengerDataInfo>
                                        {t('passenger-children-data')}
                                    </PassengerDataInfo>
                                </PassengerData >
                                <PassengerQuantity>
                                    <PassengerMinusButton type='button'  onClick={decrementChildren}>-</PassengerMinusButton>
                                    <PassengerAmount>{children}</PassengerAmount>
                                    <PassengerPlusButton type='button' onClick={incrementChildren}>+</PassengerPlusButton>
                                </PassengerQuantity>
                            </PassengerFilter>
                            <PassengerFilter>
                                <PassengerData>
                                    <PassengerDataTitle>
                                        {t('passenger-infant')}
                                    </PassengerDataTitle>
                                    <PassengerDataInfo>
                                        {t('passenger-infants-data')}
                                    </PassengerDataInfo>
                                </PassengerData >
                                <PassengerQuantity>
                                    <PassengerMinusButton type='button' onClick={decrementInfant}>-</PassengerMinusButton>
                                    <PassengerAmount>{infants}</PassengerAmount>
                                    <PassengerPlusButton type='button' onClick={incrementInfant}>+</PassengerPlusButton>
                                </PassengerQuantity>
                            </PassengerFilter>
                        </PassengerDropdownBody>
                    </PassengerDropdown>     
                                </TabStyle></Tab>
                            </TabList>
                        </TabContentStyle>
                    </TabListStyle>
                    <TabPanel>
                    <form onSubmit={handleSubmit} action='GET'>
                        <CheckTravelers>
                            {/* ====Select Countries==== */}

                            <CheckFilter>
                                {t('nav-location')}
                                <Select
                                aria-atomic={true}
                                    options={options}
                                    ref={selectRef}
                                    placeholder={t('location-placeholder')}
                                    components={{ Option: IconOption }}
                                />
                                <ArrowCircle><CgArrowsExchange /></ArrowCircle>
                            </CheckFilter>

                            {/* ========Select Calendar Check in======== */}
                            <CheckFilter>
                                {t('check-in')}
                                <div onClick={handleShow}>
                                    <CheckInput name="name" value={date} ref={checkinRef} />
                                </div>
                                <ArrowCircle><CgArrowsExchange /></ArrowCircle>
                            </CheckFilter>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                              
                            >
                                <Modal.Body  onClick={handleClose}>
                                    <StartDate date={{ date, setDate }} />
                                </Modal.Body>
                            </Modal>
                           <CalendarModal>
                            <CheckFilter>
                                {t('check-out')}
                                <div onClick={handleCheckOut}>
                                    <CheckInput name="checkout" value={endDate} ref={checkoutRef} />
                                </div>
                            </CheckFilter>
                            <Modal
                                show={showCheckOut}
                                onHide={handleCloseCheckOut}
                                backdrop="static"
                                keyboard={false}
                          
                                
                            > 
                                <Modal.Body onClick={handleCloseCheckOut} >
                                    <EndDate date={{ endDate, setEndDate }} />
                          
                                </Modal.Body>
                            </Modal>
                            </CalendarModal>
                            <SearchNav>
                                <button type='submit'> {t('nav-search')} </button>
                            </SearchNav>
                        </CheckTravelers>
                    </form>
                    </TabPanel>
                    <TabPanel>
                        <h2>Feature content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Feature content</h2>
                    </TabPanel>
                </Tabs>
            </SearchFilter>
        </Container>
    )
}
export default SearchNavbar;

function StartDate({ date }) {
    return < Calendar onChange={date.setDate} value={date.date} />
}

function EndDate({ date }) {
    return < Calendar onChange={date.setEndDate} value={date.endDate} />
}

