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
import Select from 'react-select'
import Calendar from "react-calendar";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Container } from '../../styled';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './TravelersList.css'



const TravelersSection = styled.section`
position:relative;
z-index:222;
display:flex;
flex-wrap:wrap;
align-items:end;
background-color:#fff;
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
span{
    display: inline-block;
},
p{
    margin: 0;
}
`

const PassengerDropdownBody = styled.div`
`

const PassengerFilter = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
`


const PassengerData = styled.div`

`

const PassengerDataTitle = styled.h6`
font-family: 'DM Sans';
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #777E91;
margin: 0;
`

const PassengerDataInfo = styled.span`
font-family: 'DM Sans';
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #B1B5C4;
`

const PassengerQuantity = styled.div`
`

const ArrowCircle = styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:#fff;
    text-align:center;
    position:absolute;
    right:-20px;
    z-index:333;
    bottom:34%;
    font-size:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#B1B5C4;
`


const SearchNav = styled.div`
    display:inline;
    display;flex;
    justify-content:end;
    button{
        padding:21px 42px 23px 42px;
        margin-left:25px;
        border:transparent;
        background-color: #3B71FE;
        border-radius: 10px;
      
    },
    a{
        text-decoration:none;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        font-family: 'DM Sans';
    }
`


const HotelListBreadCrumb = styled.div`
padding: 40px 0 59px 55px;
span{
    margin:0px 10px 0px 7px;
}

`

const CheckInput = styled.input`
border:none;
background-color:transparent;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #84878B;
`


const TravelersList = () => {


    const locationIcon = <HiOutlineLocationMarker />

    const { t } = useTranslation()


    const [isPassengerOpen, setPassengerOpen] = useState(false);

    const passengerDropdown = () => setPassengerOpen(!isPassengerOpen);

    const selectRef = useRef(null);
    const checkinRef = useRef(new Date());
    const checkoutRef = useRef();

    // =======Calendar========

    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const calendarDropdown = () => setCalendarOpen(!isCalendarOpen);
    const [date, setDate] = useState(null);
    const [endDate, setEndDate] = useState(null)


  // =======Select==========

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

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    useEffect(() => {
      
    
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
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <span><MdKeyboardArrowRight /></span>
                    <Breadcrumb.Item active>Home list</Breadcrumb.Item>
                </Breadcrumb>
            </HotelListBreadCrumb>

            <Container>
                <TravelersSection>
                    <Nav
                        activeKey="/">
                        <PassengerDropdown className='dropdown-passenger ' >
                            <PassengerDropdownHeader className='passenger-dropdown-header' onClick={passengerDropdown}>
                                <span className='dropdown-passenger__quantity'>{total}</span>
                                <p className='dropdown-passenger__title'>{t('passenger_title')}</p>
                                <IoIosArrowDown style={{ color: '#84878B' }} className={`passenger-icon ${isPassengerOpen && "open"}`} />
                            </PassengerDropdownHeader>
                            <PassengerDropdownBody className={`passenger-dropdown-body ${isPassengerOpen && 'open'}`}>
                                <PassengerFilter className='passenger-filter'>
                                    <PassengerData className='passenger-data'>
                                        <PassengerDataTitle className='passenger-data__title'>
                                            {t('passenger-adults')}
                                        </PassengerDataTitle>
                                        <PassengerDataInfo className='passenger-data__info'>
                                            {t('passenger-adult-data')}
                                        </PassengerDataInfo>
                                    </PassengerData>
                                    <PassengerQuantity className='passenger-quantity'>
                                        <button type='button' className='passenger-quantity__circle_minus' onClick={decrementAdult}>-</button>
                                        <small className='passenger-amount'>{adult}</small>
                                        <button type='button' className='passenger-quantity__circle_plus' onClick={incrementAdult}>+</button>
                                    </PassengerQuantity>
                                </PassengerFilter >
                                <PassengerFilter className='passenger-filter'>
                                    <PassengerData className='passenger-data'>
                                        <PassengerDataTitle className='passenger-data__title'>
                                            {t('passenger-children')}
                                        </PassengerDataTitle>
                                        <PassengerDataInfo className='passenger-data__info'>
                                            {t('passenger-children-data')}
                                        </PassengerDataInfo>
                                    </PassengerData >
                                    <PassengerQuantity className='passenger-quantity'>
                                        <button type='button' className='passenger-quantity__circle_minus' onClick={decrementChildren}>-</button>
                                        <small className='passenger-amount'>{children}</small>
                                        <button type='button' className='passenger-quantity__circle_plus' onClick={incrementChildren}>+</button>
                                    </PassengerQuantity>
                                </PassengerFilter>
                                <PassengerFilter className='passenger-filter'>
                                    <PassengerData className='passenger-data'>
                                        <PassengerDataTitle className='passenger-data__title'>
                                            {t('passenger-infant')}
                                        </PassengerDataTitle>
                                        <PassengerDataInfo className='passenger-data__info'>
                                            {t('passenger-infants-data')}
                                        </PassengerDataInfo>
                                    </PassengerData >
                                    <PassengerQuantity className='passenger-quantity'>
                                        <button type='button' className='passenger-quantity__circle_minus' onClick={decrementInfant}>-</button>
                                        <small className='passenger-amount'>{infants}</small>
                                        <button type='button' className='passenger-quantity__circle_plus' onClick={incrementInfant}>+</button>
                                    </PassengerQuantity>
                                </PassengerFilter>
                            </PassengerDropdownBody>
                        </PassengerDropdown>
                    </Nav>
                    <div>
                        <form className='check-form' onSubmit={handleSubmit}>

                            {/* ====Select Countries==== */}
                            <div className='check-filter'>
                                {t('nav-location')}
                                <Select
                                    options={options}
                                    placeholder={t('location-placeholder')}
                                />
                                <ArrowCircle><CgArrowsExchange /></ArrowCircle>
                            </div>

                            {/* ========Select Calendar Check in======== */}
                            <div className='check-filter'>
                                {t('check-in')}
                                <div onClick={handleShow}>
                                    <CheckInput name="name" value={date} ref={checkinRef} />
                                </div>
                                <ArrowCircle><CgArrowsExchange /></ArrowCircle>
                            </div>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Body>
                                < Calendar onChange={date}  />
                                </Modal.Body>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal>

                            <div className='check-filter'>
                                {t('check-out')}
                                <div onClick={handleCheckOut}>
                                    <CheckInput name="checkout" value={endDate} ref={checkoutRef} />
                                </div>
                            </div>
                            <Modal
                                show={showCheckOut}
                                onHide={handleCloseCheckOut}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Body>
                                < Calendar onChange={date}  />
                                </Modal.Body>
                                <Button variant="secondary" onClick={handleCloseCheckOut}>
                                    Close
                                </Button>
                            </Modal>

                        </form>

                    </div>
                    <SearchNav>
                        <button type='button'> <Link to='/hotel-list'>{t('nav-search')}</Link> </button>
                    </SearchNav>

                </TravelersSection>
            </Container>
        </>
    )
}

export default TravelersList;


