import React from 'react';
import ReactStars from "react-rating-stars-component";
import { CgFlagAlt } from "react-icons/cg";
import { HotelDetails } from '../../styled';
import { HotelDetailsTitle } from '../../styled';
import { HotelDetailsImg } from '../../styled';
import { HotelDetailCardRating } from '../../styled';
import { useTranslation } from 'react-i18next';

const DetailsContent = ({props}) => {

    const { t } = useTranslation()

    return (
        <HotelDetails>
            <HotelDetailsTitle>
              {props.name}
            </HotelDetailsTitle>
            <HotelDetailCardRating>
                <ReactStars
                    count={1}
                    // onChange={ratingChanged}
                    size={24}
                    color="#e0a433"
                /><small>{props.rating}</small> <span>({props.reviews} {t('SuccesReviews')})</span>
                <CgFlagAlt style={{ fontSize: '16px', margin: '0 8px 0 22px' }} />
                {props.location}
            </HotelDetailCardRating>
            <HotelDetailsImg>
                <img src={`/assets/img/${props.photo}`} alt={props.name} />
            </HotelDetailsImg>
        </HotelDetails>
    );
};

export default DetailsContent
