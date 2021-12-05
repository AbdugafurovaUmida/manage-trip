import React from 'react'
import HotelsFilter from './HotelsFilter/HotelsFilter'
import HotelsFilterInfo from './HotelsFilterInfo/HotelsFilterInfo'
import styled from 'styled-components';
import { Row,Col } from 'react-bootstrap';


const HotelsGrid = styled.section`
padding:62px 70px 120px 70px;
margin-bottom:120px;
`

const HotelsFilterGrid = () => {
    return (
        <HotelsGrid>
            <Row className='d-flex justify-content-between'>
                <Col xs={4} style={{paddingRight:'50px'}}><HotelsFilter /></Col>
                <Col xs={8}><HotelsFilterInfo /></Col>
            </Row >
        </HotelsGrid>
    )
}

export default HotelsFilterGrid
