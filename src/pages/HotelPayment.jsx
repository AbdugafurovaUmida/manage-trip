import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { Container } from '../styled';
import HotelsPayment from '../components/HotelsPayment/HotelsPayment';
import { PaymentBreadCrumb } from '../styled'
import { MdKeyboardArrowRight } from "react-icons/md";
import Subscribe from '../components/Subscribe/Subscribe';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiCalls from '../config/api';
import Loader from '../Loader/Loader';


const PaymentPage = styled.div`
background-color:${(props) => props.theme.SuccessPageBg};
`

const PaymentWrapper = styled.div`
padding-top:48px;
margin-bottom:250px;
`

const HotelPayment = () => {

    const { id } = useParams()


    const [hoteldetails, setHoteldetails] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {


        const gethotelsid = async () => {
            try {
                const data = await apiCalls.gethotelsid(id);
                setTimeout(() => {
                    setIsLoading(false)
                }, 4000);
                setIsLoading(true)
                setHoteldetails(data)
            } catch (error) {
                setError(error.message);
            }
        }

        gethotelsid();

    }, [id]);


    const { t } = useTranslation()

    return (
        <PaymentPage>
            <PaymentBreadCrumb>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">{t('Home')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item href="/hotel-list">{t('Hotel-list')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item href="/details">{t('Hotel-details')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item active>{t('payment-confirm')}</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </PaymentBreadCrumb>
            <PaymentWrapper>
               <Container>
                {error ? <p className='error'>{error}</p> : ''}
                {isLoading ? <Loader /> : ''}
                {!isLoading && !error ? <HotelsPayment props={hoteldetails} /> : ''}
            </Container> 
            </PaymentWrapper>
            <Subscribe />
        </PaymentPage>
    )
}

export default HotelPayment
