import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { Container } from '../styled';
import { MdKeyboardArrowRight } from "react-icons/md";
import Subscribe from '../components/Subscribe/Subscribe'
import Congrulations from '../components/Congrulations/Congrulations';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiCalls from '../config/api';
import Loader from '../Loader/Loader';



const CongralutionPage = styled.div`
background-color:${(props) => props.theme.SuccessPageBg};
`
const CongralutionBreadCrumb = styled.div`
padding-top:40px;
margin:0 0 34px 0;
background-color:${(props) => props.theme.SuccessPageBg};
span{
    margin:0 5px;
}
`


const Congralutions = () => {


    const { t } = useTranslation()

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
                setHoteldetails(data)
            } catch (error) {
                setError(error.message);
                setIsLoading(true)
            }
        }

        gethotelsid();

    }, [id]);





    return (
        <CongralutionPage>
            <CongralutionBreadCrumb>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">{t('Home')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item href="/hotel-list">{t('Hotel-list')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item href={ `/details/${hoteldetails.id}`}>{t('Hotel-details')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item href={ `/hotel-payment/${hoteldetails.id}`}>{t('payment-confirm')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item active> {t('Congratulations')}</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </CongralutionBreadCrumb>
            <Container>
                {error ? <p className='error'>{error}</p> : ''}
                {isLoading ? <Loader /> : ''}
                {error && isLoading ? error : ''}
                {!isLoading && !error ? <Congrulations props={hoteldetails} /> : ''}
            </Container>
            <Subscribe />
        </CongralutionPage>
    )
}

export default Congralutions;
