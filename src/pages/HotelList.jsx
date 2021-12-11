import React from 'react'
import HotelsFilterGrid from '../components/HotelsFilterGrid'
import TravelersList from '../components/TravelersList/TravelersList'
import Subscribe from '../components/Subscribe/Subscribe'
import styled from 'styled-components';


const HotelListPage = styled.div`
background-color:${(props) => props.theme.SuccessPageBg};
`


const HotelList = () => {
    return (
        <HotelListPage>
         <TravelersList />
         <HotelsFilterGrid />
         <Subscribe />
         </HotelListPage>
    )
}

export default HotelList
