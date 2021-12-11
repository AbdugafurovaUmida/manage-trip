import React from 'react';
import BestPLace from '../components/BestPlace/BestPLace';
import Destinations from '../components/Destinations/Destinations';
import ExploreWorld from '../components/ExploreWorld/ExploreWorld';
import Intro from '../components/Intro/Intro';
import Subscribe from '../components/Subscribe/Subscribe'
import SearchNavbar from '../components/SubNavbar/SearchNavbar';
import TopTour from '../components/TopTour/TopTour';
import TravelPassion from '../components/TravelPassion/TravelPassion';
import TrendingCites from '../components/TrendingCites/TrendingCites';
import styled from 'styled-components';



// const Box = styled.div`
//     width: 500px;
//     height: 100px;
//     border-radius: 8px;
//     background-color: ${(props) => props.theme.cardBg};
//     padding: 10px 20px;
// `;


const HomePage = styled.div`
background-color:${(props) => props.theme.HomePageBg};
`



const Home = () => {
    return (
        <>
        <HomePage>
            <Intro/>
            <SearchNavbar />
            <BestPLace />
            <Destinations />
            <TopTour />
            <ExploreWorld />
            <TrendingCites />
            <TravelPassion />
            <Subscribe />
        </HomePage>
        </>
    );
}

export default Home;
