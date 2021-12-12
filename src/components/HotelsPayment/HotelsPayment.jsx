import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { InputContent } from '../../styled'
import { ConfirmTitle } from '../../styled';
import { CreditCard } from '../../styled';
import { RiPencilLine } from "react-icons/ri";
import { PaymentTour } from '../../styled';
import { PaymentCards } from '../../styled';
import { Alliance } from '../../styled';
import { UnionCardMaster } from '../../styled';
import { UnionCardVisa } from '../../styled';
import { CardMasterInfo } from '../../styled';
import { CardMasterPinCode } from '../../styled';
import { CreditInform } from '../../styled';
import { InputNumber } from '../../styled';
import { SaveCard } from '../../styled';
import { HotelsPaymentInfo } from '../../styled';
import { HotelsPaymentRew } from '../../styled';
import { PaymentRooms } from '../../styled';
import { PaymentRegistr } from '../../styled';
import { BookedDetails } from '../../styled';
import { Total } from '../../styled';
import { BookedDetailsTitle } from '../../styled';
import { HotelsPaymentInfoImg } from '../../styled';
import ReactStars from "react-rating-stars-component";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsCheck } from "react-icons/bs"



const HotelsPayment = ({props}) => {

    const { t } = useTranslation()
    return (
            <Row>
                <Col xs={7}>
                    <ConfirmTitle>{t('ConfirmTitle')}</ConfirmTitle>
                    <PaymentTour>
                        <h4>{t('Your-Tour')}</h4>
                        <InputContent><label htmlFor="">{t('Date')}</label>
                            <input type="text" value={'June 27 - 30, 2020'} />
                            <span><RiPencilLine /></span>
                        </InputContent>
                        <InputContent> <label htmlFor="">{t('Traveller')}</label>
                            <input type="text" value={`1 ${t('passenger_title')}`} />
                            <span><RiPencilLine /></span>
                        </InputContent>
                    </PaymentTour>
                    <CreditCard>
                        <h4>{t('Creadit-cards')}</h4>
                        <PaymentCards>
                            <div>
                            <span><BsCheck /></span>
                                <img src="/assets/img/master-card.svg" alt="master-card" />
                            </div>
                            <div>
                            <span><BsCheck /></span>
                                <img src="/assets/img/paypal.svg" alt="paypal" />
                            </div>
                            <div>
                            <span><BsCheck /></span>
                                <img src="/assets/img/visa.svg" alt="visa" />
                            </div>
                            <div>
                            <span><BsCheck /></span>
                                <img src="/assets/img/american-express.svg" alt="american-express" />
                            </div>
                        </PaymentCards>
                        <Alliance>
                            <UnionCardMaster>
                                <CardMasterInfo>
                                    <img src="/assets/img/Union.svg" alt="union-card" />
                                    <i><IoEllipsisVertical /></i>
                                </CardMasterInfo>
                                <CardMasterPinCode>
                                    <div><span>8948   xxxx  xxxx  7894</span>
                                        <p>{t('Holder-name')}</p></div>
                                    <img src="/assets/img/master-code.svg" alt="master-card" />
                                </CardMasterPinCode>
                            </UnionCardMaster>
                            <UnionCardVisa>
                                <CardMasterInfo>
                                    <img src="/assets/img/Union.svg" alt="union-card" />
                                    <i><IoEllipsisVertical /></i>
                                </CardMasterInfo>
                                <CardMasterPinCode>
                                    <div><span>8948   xxxx  xxxx  7894</span>
                                        <p>{t('Holder-name')}</p></div>
                                    <img src="/assets/img/visa-card.svg" alt="master-card" />
                                </CardMasterPinCode>
                            </UnionCardVisa>
                        </Alliance>
                        <form action="">
                            <CreditInform>
                                <label>{t('Card-number')}</label>
                                <InputNumber type="text" />
                                <div>
                                    <label htmlFor="">{t('Expiry-Date')}</label>
                                    <input type="date" />
                                </div>
                                <div>
                                    <label htmlFor="">CVC/CVV</label>
                                    <input type="text" />
                                </div>
                            </CreditInform>
                            <SaveCard>
                                <input type="checkbox" />
                                <label htmlFor="">{t('Save-Card')}</label>
                                <button> <Link to={`/congrulation/${props.id}`}>{t('confirm-reserve')}</Link> </button>
                            </SaveCard>
                        </form>
                    </CreditCard>
                </Col>
                <Col xs={5} style={{ paddingLeft: '30px' }}>
                    <HotelsPaymentInfo>
                        <p>{props.name} </p>
                        <HotelsPaymentRew>  <ReactStars
                            count={props.rating}
                            // onChange={ratingChanged}
                            size={24}
                            color="#e0a433"
                        />
                            <span>{props.rating}</span> <small>({props.reviews} {t('SuccesReviews')})</small>
                        </HotelsPaymentRew>
                        <HotelsPaymentInfoImg>
                            <img src={`/assets/img/${props.photo}`} alt={props.name} />
                        </HotelsPaymentInfoImg>
                        <PaymentRooms>1 {t('bedroom')}  +  1 {t('private-room')}</PaymentRooms>
                        <PaymentRegistr>
                            <div>{t('check-in')}<span>June 27, 2020 </span></div>
                            <div>{t('check-out')}<span>June 30, 2020 </span></div>
                            <div>{t('Guest')}<span>2 {t('guests')}</span></div>
                        </PaymentRegistr>
                        <BookedDetailsTitle>{t('Fare-summary')}</BookedDetailsTitle>
                        <BookedDetails>
                            <div><div>${props.price} +  5{t('nights')}</div> <span>${`${props.price * 5} `} </span></div>
                            <div><div>{t('Ocupancy')}</div> <span>-$125</span></div>
                            <div><div>{t('Service')}</div> <span>$103</span></div>
                            <Total><div>{t('Booking-total')}</div> <span>${`${props.price * 5} `} </span></Total>
                            <p>{t('Report')}</p>
                        </BookedDetails>
                    </HotelsPaymentInfo>

                </Col>
            </Row>

    )
}

export default HotelsPayment
