import React from 'react'
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import { Nav } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from "react-icons/io";
import { CgArrowsExchange } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Modal from 'react-bootstrap/Modal'
import Button from '@restart/ui/esm/Button';
import Select, { components } from "react-select";
import Calendar from "react-calendar";
import { Link } from 'react-router-dom';
import { Container } from '../../styled';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useNavigate } from 'react-router';
import './TravelersList.css'


const CheckTravelers = styled.div`
display:flex;
align-items:end;
margin-top: 30px;
.react-calendar&{
    background-color:${(props) => props.theme.CalendarBg}!important;
}
`



const TravelersSection = styled.section`
position:relative;
z-index:222;
display:flex;
flex-wrap:wrap;
align-items:end;
background-color:${(props) => props.theme.TravelersSectionBg};
justify-content:space-between;
box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
border-radius: 20px;
padding: 30px 60px;
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
    bottom:140px;
    left:200px;
    background-color:${(props) => props.theme.PassengerDropdownBg} ;
    border-top: 1px solid #E5E8EC;
    display: none;
    z-index: 555;
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


const HotelListBreadCrumb = styled.div`
padding: 40px 0 59px 55px;
background-color:${(props) => props.theme.HotelListTravelersBg};

span{
    margin:0px 10px 0px 7px;
}
a{
    color:${(props) => props.theme.BreadCrumbColor} !important;;
}
.active{
    color:${(props) => props.theme.BreadCrumbColor_Active} !important;
}
span{
    color:${(props) => props.theme.BreadCrumbColor};
}

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
    width:260px;
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
    padding-top:8px;
    background-color:transparent;
    border:transparent;
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
`

const ModalCalendar =styled.div`
.react-calendar&{
    background-color:red;
}
`


const TravelersList = () => {

    const navigate = useNavigate();

    const locationIcon = <HiOutlineLocationMarker />

    const { t } = useTranslation()


    const [isPassengerOpen, setPassengerOpen] = useState(false);

    const passengerDropdown = () => setPassengerOpen(!isPassengerOpen);

    const selectRef = useRef(null);
    const checkinRef = useRef(new Date());
    const checkoutRef = useRef();

    // =======Calendar========

    const [isCalendarOpen, setCalendarOpen] = useState(false);
    // const calendarDropdown = () => setCalendarOpen(!isCalendarOpen);
    const [date, setDate] = useState(null);
    const [endDate, setEndDate] = useState(null)


    // =======Select==========


    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 0,
            width:800
          }),

    }



    const { Option } = components;
    const IconOption = props => (
      <Option {...props}>
         <HiOutlineLocationMarker  style={{marginRight:'10px',color:'#B1B5C4',fontSize:'14px'}}/>
        {props.data.label}
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
    const handleShow = () => setShow(true);


    const handleCheckOut = () => setShowCheckOut(true);


    const handleCloseCheckOut = () => setShowCheckOut(false);



    // ========= Form ========

    const handleSubmits = (e) => {
        e.preventDefault();
        console.log(selectRef.current.props.value)
        console.log(checkinRef.current.value)
        console.log(checkoutRef.current.value)
        navigate('/hotel-list')
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
        <>

            <HotelListBreadCrumb>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">{t('Home')}</Breadcrumb.Item>
                    <span><MdKeyboardArrowRight /></span>
                    <Breadcrumb.Item active>{t('Hotel-list')}</Breadcrumb.Item>
                </Breadcrumb>
            </HotelListBreadCrumb>
            <Container>
                <TravelersSection>
                    <PassengerDropdown  >
                        <PassengerDropdownHeader onClick={passengerDropdown}>
                            <span>{total}</span>
                            <p >{t('passenger_title')}</p>
                            <IoIosArrowDown className={`passenger-icon ${isPassengerOpen && "open"}`} />
                        </PassengerDropdownHeader>
                        <PassengerDropdownBody className={`passenger-dropdown-body ${isPassengerOpen && 'open'}`}>
                            <PassengerFilter>
                                <PassengerData >
                                    <PassengerDataTitle >
                                        {t('passenger-adults')}
                                    </PassengerDataTitle>
                                    <PassengerDataInfo >
                                        {t('passenger-adult-data')}
                                    </PassengerDataInfo>
                                </PassengerData>
                                <PassengerQuantity >
                                    <PassengerMinusButton type='button' onClick={decrementAdult}>-</PassengerMinusButton>
                                    <PassengerAmount >{adult}</PassengerAmount>
                                    <PassengerPlusButton type='button' onClick={incrementAdult}>+</PassengerPlusButton>
                                </PassengerQuantity>
                            </PassengerFilter >
                            <PassengerFilter>
                                <PassengerData>
                                    <PassengerDataTitle>
                                        {t('passenger-children')}
                                    </PassengerDataTitle>
                                    <PassengerDataInfo >
                                        {t('passenger-children-data')}
                                    </PassengerDataInfo>
                                </PassengerData >
                                <PassengerQuantity >
                                    <PassengerMinusButton type='button' onClick={decrementChildren}>-</PassengerMinusButton>
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
                                <PassengerQuantity >
                                    <PassengerMinusButton type='button'onClick={decrementInfant}>-</PassengerMinusButton>
                                    <PassengerAmount>{infants}</PassengerAmount>
                                    <PassengerPlusButton type='button' onClick={incrementInfant}>+</PassengerPlusButton>
                                </PassengerQuantity>
                            </PassengerFilter>
                        </PassengerDropdownBody>
                    </PassengerDropdown>

                    <form onSubmit={handleSubmits} action='GET'>
                        <CheckTravelers>
                            {/* ====Select Countries==== */}

                            <CheckFilter>
                                {t('nav-location')}
                                <Select
                                    options={options}
                                    placeholder={t('location-placeholder')}
                                    components={{ Option: IconOption }}
                                    styles={{customStyles}}
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
                            

                            <SearchNav>
                                <button type='submit'> {t('nav-search')} </button>
                            </SearchNav>
                        </CheckTravelers>
                    </form>

                </TravelersSection>
            </Container>
        </>
    )
}

export default TravelersList;


