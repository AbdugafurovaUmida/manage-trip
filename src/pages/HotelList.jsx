import React from 'react'
import HotelsFilterGrid from '../components/HotelsFilterGrid'
import TravelersList from '../components/TravelersList/TravelersList'
import Subscribe from '../components/Subscribe/Subscribe'


const HotelList = () => {
    return (
        <>
         <TravelersList />
         <HotelsFilterGrid />
         <Subscribe />
        </>
    )
}

export default HotelList
