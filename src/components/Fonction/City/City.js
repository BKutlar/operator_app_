import React from 'react' ;
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
// import {BiArrowBack} from 'react-icons/bi'
 
const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

const City = () =>{
    return (
        <>
        {/* <Icon to='/'><BiArrowBack/></Icon> */}
        <Icon to='/'><BiArrowBack/></Icon>
        <div>Hello</div>
        </>
    )
}

export default City; 