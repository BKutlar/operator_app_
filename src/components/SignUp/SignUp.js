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