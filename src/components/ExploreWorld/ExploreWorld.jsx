import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styled';
import 'swiper/swiper.min.css';
// import SwiperCore , { Autoplay } from 'swiper';
// import SwiperCore, { Pagination, Navigation } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import ExploreCards from '../ExploreCard/ExploreCards'
import Loader from '../../Loader/Loader';
import 'swiper/swiper.min.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import apiCalls from '../../config/api';



const Explore = styled.section`
padding-bottom:70px;
`
const ExploreTitle = styled.h2`
font-family: 'DM Sans';
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.ExploreTitleColor} ;

`

const ExploreText = styled.p`
font-weight: 500;
font-size: 18px;
line-height: 23px;
color:${(props) => props.theme.ExploreTextColor} ;
margin:0 0 50px 0;
`
const ExploreContent = styled.div`
margin-top:49px;
display:flex;
gap:30px;
`


SwiperCore.use([Autoplay]);
// SwiperCore.use([Pagination, Navigation]);

const ExploreWorld = () => {

    const { t } = useTranslation()

    const [explore, setExplore] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {

        const getexplore = async () => {
            try {
                const data = await apiCalls.getexplore();
                setTimeout(() => {
                    setIsLoading(false)
                }, 4000);
                setIsLoading(true)
                setExplore(data);
                console.log(data)
            } catch (error) {
                setError(error.message);
            }
        }
        getexplore();

    }, []);


    return (
        <Container>
            <Explore>
                <ExploreTitle>{t('Explore-title')}</ExploreTitle>
                <ExploreText>10,788 {`${t('Explore-text')}`}</ExploreText>
                {error ? <p className='error'>{error}</p> : ''}
                {isLoading ? <Loader /> : ''}
                {!isLoading && !error ? <Swiper
                    modules={[Autoplay]}
                    grabCursor={true}
                    spaceBetween={30}
                    slidesPerView={4}
                    loop autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                       <ExploreContent>
                        {explore.map(el => (<SwiperSlide><ExploreCards exploreobj={el} key={el.id} /></SwiperSlide>))}
                   </ExploreContent>
                </Swiper> : ''}
            </Explore>
        </Container>

    )
}

export default ExploreWorld;
