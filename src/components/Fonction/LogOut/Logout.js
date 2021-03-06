import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Logout = () => {

 const history = useNavigate();

 useEffect(()=>{
     fetch('/logout', {
         method: 'GET',
         headers: {
             Accept: 'application/json',
             "Content-Type": 'application/json'
         }, 
         credentials: 'include'
     }).then((res)=> {
         history('/', {replace: true}, localStorage.removeItem('user'))
         
         if (res.status !== 200) {
             const error = new Error(res.error);
             throw error;
         }
     }).catch((err) => {
         console.log(err)
     })

     alert('Log out')
 });

 return (
     <>
     
        <h1>Logout</h1>
     </>
 )
}

export default Logout;