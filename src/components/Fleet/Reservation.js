import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';
import Form from './Form';

const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left:16px;
        margin-top: 8px;
    }
`;

const Home = styled(Link)`
    margin-left: 32px;
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 32px;
    align-items: center;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`
const Reservation = () => {
  return (
      <>
      <Icon to='/charging'><BiArrowBack/></Icon>
      {/* <Home to='/'><AiFillHome/></Home> */}
      <Form/>
      </>
  )
}

export default Reservation;