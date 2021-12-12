import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { Container } from '../styled';
import { MdKeyboardArrowRight } from "react-icons/md";
import Subscribe from '../components/Subscribe/Subscribe'
import Congrulations from '../components/Congrulations/Congrulations';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';



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

    return (
        <CongralutionPage>
            <CongralutionBreadCrumb>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">{t('Home')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item href="/hotel-list">{t('Hotel-list')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item href="/details">{t('Hotel-details')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item href="/hotel-payment">{t('payment-confirm')}</Breadcrumb.Item>
                        <span><MdKeyboardArrowRight /></span>
                        <Breadcrumb.Item active> {t('Congratulations')}</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </CongralutionBreadCrumb>
            <Container>
                <Congrulations />
            </Container>
            <Subscribe />
        </CongralutionPage>
    )
}

export default Congralutions;
