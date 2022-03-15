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
import axios from 'axios'




const SignUp = () => {
// function SignUp() {
// class SignUp extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         email: '',
    //         password: '',
    //     }

    //     this.changeEmail = this.changeEmail.bind(this)
    //     this.changePassword = this.changePassword.bind(this)
    //     this.onSubmit = this.onSubmit.bind(this)
    // }
    // changeEmail(event) {
    //     this.setState({ email: event.target.value })
    // }

    // changePassword(event) {
    //     this.setState({ password: event.target.value })
    // }

    // onSubmit(event) {
    //     event.preventDefault()

    //     const registered = {
    //         email: this.state.email,
    //         password: this.state.password
    //     }

    //     axios.post('http://localhost:5000/app/signup', registered)
    //         .then(response => console.log(response.data))

    //     this.setState({
    //         email: '',
    //         password: '',
    //     })
    // }
    const history = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email, 
                password,
            })
        })

        const data = await response.json() 

        if(data.status === 'ok') {
            history('/')
        }
    }


       return (
            <>
                <Container>
                    <FormWrap>
                        <Icon to='/'>Helios</Icon>
                        <FormContent onSubmit={registerUser}>
                            <Form >
                                <FormH1>Sign up to your account</FormH1>
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