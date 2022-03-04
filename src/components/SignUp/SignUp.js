import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
    Container, 
    FormWrap, 
    FormContent,
    Icon,
    Form,
    FormH1,
    FormLabel,
    FormInput, 
    FormButton,
    Text
} from './SignUpElement'

// const Icon = styled(Link)`
//     margin-left: 32px;
//     margin-top: 32px;
//     text-decoration: none;
//     color: #fff;
//     font-weight: 700;
//     font-size: 32px;

//     @media screen and (max-width: 480px) {
//         margin-left: 16px;
//         margin-top: 8px;
//     }
// `;

const SignUp = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>Helios</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign up to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Submit</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignUp;