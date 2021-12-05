import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { MdKeyboardArrowRight } from "react-icons/md";
import { DetailsBreadCrumb } from '../styled';
import DetailsContent from '../components/DetailsContent/DetailsContent';
import DetailGrid from '../components/DetailGrid/DetailGrid';
import { DetailWrapper } from '../styled';

const Details = () => {
    return (
        <>
            <DetailsBreadCrumb>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <span><MdKeyboardArrowRight /></span>
                    <Breadcrumb.Item href="#">Hotel list</Breadcrumb.Item>
                    <span><MdKeyboardArrowRight /></span>
                    <Breadcrumb.Item active>Home list</Breadcrumb.Item>
                </Breadcrumb>
            </DetailsBreadCrumb>
            <DetailWrapper>
                <DetailsContent />
                <DetailGrid />
            </DetailWrapper>
        </>
    )
}

export default Details
