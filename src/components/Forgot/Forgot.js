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
} from './ForgotElement'


const Forgot = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>Helios</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Forgot password</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" required />
                        <FormButton type='submit'>Submit</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default Forgot;