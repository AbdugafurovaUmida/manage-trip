import React from 'react'
import { BookingCard } from '../../styled'
import { BookingCardPrice } from '../../styled'
import { BookingCardTravelers } from '../../styled'
import { ExtraFeature } from '../../styled'
import { ExtraFeatureTitle } from '../../styled'
import { FeaturePriceTitle } from '../../styled'
import { FeaturePrice } from '../../styled'
import { FeatureTotal } from '../../styled'
import { BookingCardButton } from '../../styled'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'




const BookingDetails = ({props}) => {

    const { t } = useTranslation()

    return (
        <BookingCard>
            <BookingCardPrice>
                <div>
                    {`$${props.price}`}
                    <span>{t('night')}</span>
                    <small>$184</small>
                </div>
                <button>20% {t('off')}</button>
            </BookingCardPrice>
            <BookingCardTravelers>
                <div>
                    <label htmlFor="">{t('check-in')}</label>
                    <input type="text" value='May 15, 2021 ' />
                </div>
                <div>

                    <label htmlFor="">{t('check-out')}</label>
                    <input type="text" value='May 22, 2021 ' />
                </div>
                <div>
                    <label htmlFor="">{t('Guest')} </label>
                    <select name="" id="">
                        <option value="">2 {t('Adults')}, 1 {t('Children')}</option>
                    </select>
                </div>
            </BookingCardTravelers>
            <ExtraFeatureTitle>
                {t('Extra-Features')}
            </ExtraFeatureTitle>
            <ExtraFeature>
                <div><div><input type="checkbox" /> <label htmlFor="">{t('Allow')}</label></div> <span>$13</span></div>
                <div><div><input type="checkbox" /> <label htmlFor="">{t('Breakfast-person')}</label></div> <span>$10</span></div>
                <div><div><input type="checkbox" /> <label htmlFor="">{t('Parking-day')}</label></div> <span>$6</span></div>
                <div><div><input type="checkbox" /> <label htmlFor="">{t('Extra-pillow')}</label></div> <span>{t('Free')}</span></div>
            </ExtraFeature>
            <FeaturePriceTitle>
                {t('Price')}
            </FeaturePriceTitle>
            <FeaturePrice >
                <div><div>1 {t('nights')}</div><span>${props.price}</span></div>
                <div><div>{t('Discount')} 20%</div><span>$200</span></div>
                <div><div>{t('Breakfast-person')}</div><span>$10</span></div>
                <div><div>{t('Service')}</div><span>$5</span></div>
            </FeaturePrice>
            <FeatureTotal>
                <p>{t('Total-payment')}</p>
                <span>$300</span>
            </FeatureTotal>
            <BookingCardButton>
                <Link to={`/hotel-payment/${props.id}`}>{t('Book-now')}</Link>
            </BookingCardButton>
            <p>{t('you-will')}</p>
        </BookingCard>
    )
}

export default BookingDetails;
