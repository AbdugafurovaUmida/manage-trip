import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { MdKeyboardArrowRight } from "react-icons/md";
import { DetailsBreadCrumb } from '../styled';
import DetailsContent from '../components/DetailsContent/DetailsContent';
import DetailGrid from '../components/DetailGrid/DetailGrid';
import { DetailWrapper } from '../styled';
import Subscribe from '../components/Subscribe/Subscribe';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiCalls from '../config/api';
import Loader from '../Loader/Loader';


const DetailsPage = styled.div`
background-color:${(props) => props.theme.SuccessPageBg};
`



const Details = () => {

    const { id } = useParams()

    const { t } = useTranslation()

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

    return (
        <DetailsPage>
            <DetailsBreadCrumb>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">{t('Home')}</Breadcrumb.Item>
                    <span><MdKeyboardArrowRight /></span>
                    <Breadcrumb.Item href="/hotel-list">{t('Hotel-list')}</Breadcrumb.Item>
                    <span><MdKeyboardArrowRight /></span>
                    <Breadcrumb.Item active>{t('Hotel-details')}</Breadcrumb.Item>
                </Breadcrumb>
            </DetailsBreadCrumb>
            <DetailWrapper>
                {error ? <p className='error'>{error}</p> : ''}
                {isLoading ? <Loader /> : ''}
                {!isLoading && !error ? <DetailsContent props={hoteldetails} />: ''}
                <DetailGrid props = {hoteldetails}/>
            </DetailWrapper>
            <Subscribe />
        </DetailsPage>
    )
}

export default Details
