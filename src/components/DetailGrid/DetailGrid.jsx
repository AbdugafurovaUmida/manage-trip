import React from 'react'
import DetailInfo from '../DetailInfo/DetailInfo';
import { Row,Col } from 'react-bootstrap';
import BookingDetails from '../BookingDetails/BookingDetails';


const DetailGrid = ({props}) => {
    return (
        <Row>
            <Col xs={7}><DetailInfo props ={props} /></Col>
            <Col xs={5} style={{paddingLeft:'60px'}}><BookingDetails props ={props} /></Col>
        </Row>
    )
}

export default DetailGrid
