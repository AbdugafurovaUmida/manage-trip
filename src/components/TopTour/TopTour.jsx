import React from 'react'
import { useState, useEffect } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import TopTourCards from '../TopTourCard/TopTourCards';
import styled from 'styled-components'
import { Container } from '../../styled'
import Loader from '../../Loader/Loader';
import apiCalls from '../../config/api';
import 'swiper/swiper.min.css';
import './TopTour.css'

const Top = styled.section`
padding:70px 0;
position:relative;
`

const TopTitle = styled.h2`
font-family: 'DM Sans';
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color:${(props) => props.theme.TopTitleColor} ;
margin-bottom:12px;
`


const TopText = styled.h2`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color:${(props) => props.theme.TopTextColor} ;
margin:0 0 50px 0;
`

const TopTourContent = styled.div`

display:flex;
gap:30px;
`

SwiperCore.use([Autoplay]);

const TopTour = () => {
    const { t } = useTranslation()

    const [tour, setTour] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {

        const gettours = async () => {
            try {
                const data = await apiCalls.gettours();
                setTimeout(() => {
                    setIsLoading(false)
                }, 4000);
                setIsLoading(true)
                setTour(data);
                console.log(data)
            } catch (error) {
                setError(error.message);
            }
        }

        gettours();

    }, []);



    return (
        <Container>
            <Top>
                <TopTitle>
                    {t('TopTitle')}
                </TopTitle>
                <TopText>
                    {t('TopText')}

                </TopText>

                {error ? <p className='error'>{error}</p> : ''}
                {isLoading ? <Loader /> : ''}
                {!isLoading && !error ? <Swiper
                    modules={[Autoplay]}
                    grabCursor={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    <TopTourContent>
                        {tour.map(el => (<SwiperSlide><TopTourCards tourobj={el} key={el.id} /></SwiperSlide>))}
                    </TopTourContent>
                </Swiper> : ''}
            </Top>
        </Container>
    )
}

export default TopTour;
