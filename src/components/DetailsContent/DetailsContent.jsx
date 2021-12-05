import React from 'react';
import ReactStars from "react-rating-stars-component";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HotelDetails } from '../../styled';
import { HotelDetailsTitle } from '../../styled';
import { HotelDetailsImg } from '../../styled';
import { HotelDetailCardRating } from '../../styled';

const DetailsContent = () => {
    return (
        <HotelDetails>
            <HotelDetailsTitle>
                Switzerland Hotels and Places to Stay
            </HotelDetailsTitle>
            <HotelDetailCardRating>
                <ReactStars
                    count={1}
                    // onChange={ratingChanged}
                    size={24}
                    color="#e0a433"
                /><small>4.8</small> <span>(122 reviews)</span>
                <HiOutlineLocationMarker style={{ fontSize: '16px', margin: '0 8px 0 22px' }} />
                Zuich town, Switzerland
            </HotelDetailCardRating>
            <HotelDetailsImg>
                <img src="/assets/img/DetailsImg.jpg" alt="hotels-details" />
            </HotelDetailsImg>
        </HotelDetails>
    );
};

export default DetailsContent
