import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { useTranslation } from 'react-i18next';
import { FaLaptopCode } from "react-icons/fa";
import { RiCalendar2Line } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import { RiWallet3Fill } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiCalls from '../../config/api';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';


const SuccessPage = styled.section`
padding-top:30px;
margin-bottom:250px;
// background-color:${(props) => props.theme.SuccessPageBg};
`


const SuccessText = styled.p`
font-weight: bold;
font-size: 25px;
line-height: 21px;
color:${(props) => props.theme.SuccessTextcolor} ;
margin-bottom:20px;
`


const SuccessTitle = styled.h4`
font-weight: 500;
font-size: 48px;
line-height: 60px;
color:${(props) => props.theme.SuccesTitle} ; 
padding-bottom:24px;
border-bottom: ${(props) => props.theme.SuccesTitleBorder};
margin-bottom:37px;
display:inline-block;
padding-right:200px;
`


const SuccessInform = styled.div`
`


const SuccessInformText = styled.p`
font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color:${(props) => props.theme.SuccesInformTextColor} ;
margin-bottom:27px;
`



const ReserveDetails = styled.div`
background-color:${(props) => props.theme.ReserveDetailsBg} ;
border: ${(props) => props.theme.ReserveDetailsBorder};
border-radius: 10px;
padding:19px 25px 15px 25px;
margin-bottom:30px;
div{
    display:flex;
    justify-content:space-between;
    div{
        display:flex;
        align-items:center;
        font-size: 16px;
        line-height: 24px;
        color:${(props) => props.theme.ReserveDetailsColor}  ;
        font-weight: 500;
        margin-bottom:22px;
        svg{
            margin-right:14px;
        }
    }
    span{
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        color:${(props) => props.theme.ReserveDetailsCode};
        font-weight: 500;
    }
}

`


const SuccesRew = styled.div`
display:flex;
align-items:center;
padding-bottom:24px;
border-bottom:${(props) => props.theme.SuccesTitleBorder};
margin-bottom:25px;
span{
    // margin-right:12px;
}
small{
    font-size: 14px;
    line-height: 24px;
    color: #84878B;
    margin-right:37px;
    font-weight: 500;
}
div{
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.SuccesRewColor} ;
    font-weight: 500;
}
`


const SuccesTraveller = styled.div`
display:flex;
margin-bottom:30px;
div{
    border-radius: 12px;
    padding:7px 36px 11px 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #84878B;
    background-color:${(props) => props.theme.SuccesTravellerBg};
    &:not(:last-child){
        margin-right:24px;
    }
}
span{
    display:block;
    font-size: 14px;
    line-height: 21px;
    color:${(props) => props.theme.SuccesTravellerColor};
    font-weight: 500;
}
`


const ReserveDetailsTitle = styled.h6`
font-weight: bold;
font-size: 28px;
line-height: 41px;
color:${(props) => props.theme.ReserveDetailsTitleColor};
margin-bottom:24px;

`

const ReserveDetailsBtn = styled.button`
background-color: #3B71FE;
border-radius: 34px;
line-height: 130.2%;
border:transparent;
padding:13.5px 25.5px 13.5px 37.5px;
a{
   text-decoration:none; 
   color: #FFFFFF;
   font-size: 16px;
   font-weight: bold;
}

`


const ReserveDetailsImg = styled.div`
width:679px;
height:417px;
border-radius: 20px;
margin-top:45px;
img{
    width:100%;
    object-fit:cover;
    object-position:center;
    border-radius: 20px;
}

`


const Congrulations = () => {


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




    const { t } = useTranslation()


    return (
        <SuccessPage>
        {error ? <p className='error'>{error}</p> : ''}
        {isLoading ? <Loader /> : ''}
        {error && isLoading ? error :''}
        {!isLoading && !error ? 
            <>
            <SuccessText>{t('SuccessText')}</SuccessText>
            <SuccessTitle>{t('SuccessTitle')}</SuccessTitle>
            <SuccessInform>
                <SuccessInformText>{hoteldetails.name}</SuccessInformText>
                <Row>
                    <Col xs={4}>
                        <SuccesRew>
                            <ReactStars
                                count={hoteldetails.rating }
                                // onChange={hoteldetails.rating}
                                size={24}
                                color="#e0a433"
                            />
                            <div> {hoteldetails.rating} <small>({hoteldetails.reviews} {t('SuccesReviews')})</small></div>
                            <div>1 {t('SuccesRew')}</div>
                        </SuccesRew>
                        <SuccesTraveller><div><span>{t('SuccesTravellerdates')}</span>May 15 - 22, 2021 </div> <div><span>{t('SuccesTraveller')}</span> 1 {t('SuccesTravellerPassenger')}</div></SuccesTraveller>
                        <ReserveDetails>
                            <ReserveDetailsTitle>{t('ReserveDetailsTitle')}</ReserveDetailsTitle>
                            <div>
                                <div><FaLaptopCode />{t('Booking-code')}</div> <span>FD_158456</span>
                            </div>
                            <div>
                                <div><RiCalendar2Line />{t('Booking-date')}</div> <span>30 Apr, 2021</span>
                            </div>
                            <div>
                                <div><BiTrash />{t('Booking-total')}</div> <span>${`${hoteldetails.price * 5} `}</span>
                            </div>
                            <div>
                                <div><RiWallet3Fill />{t('PaymentMethod')}</div> <span>{t('CreditCard')}</span>
                            </div>
                        </ReserveDetails>
                        <ReserveDetailsBtn> <Link to='/'>{t('GoHome')}</Link> </ReserveDetailsBtn>
                    </Col>
                    <Col xs={7} style={{ paddingLeft: '100px' }}>
                        <ReserveDetailsImg>
                            <img src={`/assets/img/${hoteldetails.photo}`} alt={hoteldetails.name}/>
                        </ReserveDetailsImg>
                    </Col>
                </Row>
            </SuccessInform>
            </>
            : ''}
        
        </SuccessPage>
    )
}

export default Congrulations
