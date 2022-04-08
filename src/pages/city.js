import React from 'react';
import City from '../components/Fonction/City/City';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';

const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #0000;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`
// import Chart from '../components/Chart/Chart';
const CityPage = () => {
    return(
        <>
        {/* <Icon to='/'><BiArrowBack/></Icon> */}
        <City/>
        {/* <App/> */}
        {/* <Chart/> */}
        </>
    )
}

export default CityPage;