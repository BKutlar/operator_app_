import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
} from './SigninElement';
// import base64url from 'base64url';
// import jwt_decode from 'jwt-decode';
// import jwt from 'jsonwebtoken';
import { decodeToken } from 'react-jwt';
const SignIn = () => {
    // const [data, setData] = useState({email:"", password:""});
    // const [error, setError] = useState('');

    // const handleChange = ({currentTarget: input}) => {
    //     setData({...data, [input.name]: input.value});
    // }; 

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try{
    //         const url = 'http://localhost:5000/app/signin';
    //         const { data: res}= await axios.post(url, data);
    //         localStorage.setItem("token", res.data);
    //         window.location = '/';
    //     } catch (error) {
    //         if(
    //             error.response && 
    //             error.response.status >= 400 &&
    //             error.response.status<= 500 
    //         ) {
    //             setError(error.response.data.message);
    //         }
    //     }
    // }

    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const history = useNavigate()
    async function loginUser(event) {
        event.preventDefault();
        
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, 
                password,
            }),
        })

        const data = await response.json()
        console.log(data)
        if(data.user) {
            localStorage.setItem('token', data.user)
           const user = decodeToken(data.user);
            localStorage.setItem('user',JSON.stringify(user))
            alert('Login successful')
            window.location.href='#'
            
        } else {
            alert('Please check your username and password')
        }

        if(data.status === 'ok') {
            history('/')
        }

        
    }
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Helios</Icon>
                    <FormContent>
                        <Form action="#" onSubmit={loginUser}>
                            <FormH1>Sign in to your acount</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email"  
                                       placeholder="Email"
                                       onChange={(e) => setEmail(e.target.value)}
                                       value={email} required/>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password"
                                        placeholder="Password"
                                        onChange={(e)=> setPassword(e.target.value)}
                                        value={password} required/>                                        
                            <FormButton type="submit" value="Login">Continue</FormButton>
                            <p>
                                <Link to='/forgot'>Forgot Password</Link>
                            </p>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;