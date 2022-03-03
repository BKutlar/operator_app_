import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;

const Success = () => {
    return (
        <>
        <Icon to='/'>Helios</Icon>
        <div>Hello</div>
        </>
    )
}

export default Success;