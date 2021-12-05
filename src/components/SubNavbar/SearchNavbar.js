import React from 'react'
import { Container } from '../../styled';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import './SearchNavbar.css'
import { FaBed } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { IoMdCar } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef, useEffect } from 'react';
import Select from 'react-select'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgArrowsExchange } from "react-icons/cg";
import Calendar from "react-calendar";
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from '@restart/ui/esm/Button';
import { useNavigate } from 'react-router';





const SearchFilter = styled.div`
    position:relative;
    bottom:100px;
    z-index:222;
    display:flex;
    flex-wrap:wrap;
    align-items:end;
    background-color:#fff;
    justify-content:space-between;
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
    border-radius: 20px;
    padding: 30px 60px;
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
`;

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
        color: #FFFFFF;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        font-family: 'DM Sans';
    }
    
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

const CheckInput = styled.input`
border:none;
`


const SearchNavbar = () => {
    
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
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            navigate('/hotel-list')
    }

    useEffect(() => {
        selectRef.current.value = 'where are your from?'
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
                <Nav
                >
                    <div className='search-nav-wrapper'>
                        <Nav.Item>
                            <Nav.Link href="/" className='hotel-actived'>
                                <FaBed style={{ marginRight: '8px', fontSize: '20px' }} />
                                {t('nav-hotel')}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/flights">
                                <span><RiFlightTakeoffFill /></span>
                                {t('nav-flight')}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/rental-car">
                                <span><IoMdCar /></span>
                                {t('nav-rental-car')}
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className='dropdown-passenger ' >
                        <div className='passenger-dropdown-header' onClick={passengerDropdown}>
                            <span className='dropdown-passenger__quantity'>{total}</span>
                            <p className='dropdown-passenger__title'>{t('passenger_title')}</p>
                            <IoIosArrowDown style={{ color: '#84878B' }} className={`passenger-icon ${isPassengerOpen && "open"}`} />
                        </div>
                        <div className={`passenger-dropdown-body ${isPassengerOpen && 'open'}`}>
                            <div className='passenger-filter'>
                                <div className='passenger-data'>
                                    <h6 className='passenger-data__title'>
                                        {t('passenger-adults')}
                                    </h6>
                                    <span className='passenger-data__info'>
                                        {t('passenger-adult-data')}
                                    </span>
                                </div>
                                <div className='passenger-quantity'>
                                    <button type='button' className='passenger-quantity__circle_minus' onClick={decrementAdult} >-</button>
                                    <small className='passenger-amount'>{adult}</small>
                                    <button type='button' className='passenger-quantity__circle_plus' onClick={incrementAdult}>+</button>
                                </div>
                            </div>
                            <div className='passenger-filter'>
                                <div className='passenger-data'>
                                    <h6 className='passenger-data__title'>
                                        {t('passenger-children')}
                                    </h6>
                                    <span className='passenger-data__info'>
                                        {t('passenger-children-data')}
                                    </span>
                                </div>
                                <div className='passenger-quantity'>
                                    <button type='button' className='passenger-quantity__circle_minus' onClick={decrementChildren}>-</button>
                                    <small className='passenger-amount'>{children}</small>
                                    <button type='button' className='passenger-quantity__circle_plus' onClick={incrementChildren}>+</button>
                                </div>
                            </div>
                            <div className='passenger-filter'>
                                <div className='passenger-data'>
                                    <h6 className='passenger-data__title'>
                                        {t('passenger-infant')}
                                    </h6>
                                    <span className='passenger-data__info'>
                                        {t('passenger-infants-data')}
                                    </span>
                                </div>
                                <div className='passenger-quantity'>
                                    <button type='button' className='passenger-quantity__circle_minus' onClick={decrementInfant}>-</button>
                                    <small className='passenger-amount'>{infants}</small>
                                    <button type='button' className='passenger-quantity__circle_plus' onClick={incrementInfant}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Nav>
                <div>
                    <form className='check-form' onSubmit={handleSubmit}>

                        {/* ====Select Countries==== */}
                        <div className='check-filter'>
                            {t('nav-location')}
                            <Select
                                options={options}
                                ref={selectRef}
                                placeholder={'Where are you from?'}
                            />
                            <ArrowCircle><CgArrowsExchange /></ArrowCircle>
                        </div>

                        {/* ========Select Calendar Check in======== */}
                        <div className='check-filter'>
                            {t('check-in')}
                            <div onClick={handleShow}>
                                {/* <CheckInput name="name"  value={date} ref={checkinRef} /> */}
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
                            < Calendar onChange={date} />
                            </Modal.Body>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal>

                        {/* =========== Select Check out ==========*/}
                        <div className='check-filter'>
                            {t('check-out')}
                            <div onClick={handleCheckOut}>
                                <input name="checkout" value={endDate} ref={checkoutRef} />
                            </div>
                        </div>

                        <Modal
                            show={showCheckOut}
                            onHide={handleCloseCheckOut}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Body>
                            < Calendar onChange={date} />
                            </Modal.Body>
                            <Button variant="secondary" onClick={handleCloseCheckOut}>
                                Close
                            </Button>
                        </Modal>
                        <SearchNav>
                            <button type='submit'>{t('nav-search')}</button>
                        </SearchNav>
                    </form>
                </div>
            </SearchFilter>
        </Container>
    )
}
export default SearchNavbar;

