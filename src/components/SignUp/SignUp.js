import React, { useState, Component } from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
} from './SignUpElement';
import {BiArrowBack} from 'react-icons/bi'




const SignUp = () => {

    const history = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        // console.log('before fetch')
        event.preventDefault()
        
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name,
                email, 
                password,
            })
        })
        // console.log('after fetch')
        const data = await response.json() 
        console.log(data)
        if(data.status === 'ok') {
            history('/')
        } else {
            alert('Email already exists')
        
        }
 
        
    }


       return (
            <>
                <Container>
                    <FormWrap>
                        <Icon to='/'><BiArrowBack/></Icon>
                        <FormContent onSubmit={registerUser}>
                            <Form >
                                <FormH1>Sign up to your account</FormH1>
                                <FormLabel htmlFor='for'>Name</FormLabel>
                                <FormInput
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                type='name'
                                placeholder='Name'/>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput  
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email"
                                placeholder="Email" />
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}  
                                type='password'
                                 placeholder="Password" 
                                />
                                <FormButton type='submit' /*value='Register'*/>Submit</FormButton>
                                <Text>Forgot Password</Text>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </>
        )
    
}

// module.exports = mongoose.model('mytable', signUpTemplate);
// export default App;
export default SignUp;