import React from 'react'
import DetailInfo from '../DetailInfo/DetailInfo';
import { Row,Col } from 'react-bootstrap';
import BookingDetails from '../BookingDetails/BookingDetails';
const DetailGrid = () => {
    return (
        <Row>
            <Col xs={7}><DetailInfo /></Col>
            <Col xs={5}><BookingDetails /></Col>
        </Row>
    )
}

export default DetailGrid
