import './login.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginPanel from './Loginapanel'
export default function Login(){
const[login,setLogin]=useState({
    email:"",
    password:"",
})
const handleEmail=(e)=>{
    e.preventDefault();
    const em = e.target.value;
    setLogin( {...login, email:em})
    }
    const handlePassword=(e)=>{
        e.preventDefault();
        const ps = e.target.value;
        setLogin( {...login, password:ps})
 }

console.log(login);
return(

<div className="login-page">
<h1>  Sign into your account</h1>
<LoginPanel/>
<p> Or log in with an email  </p>
<input 
type="email"
placeholder='Email address'
name="email"
value={login.email}
onChange={handleEmail}
/>
<input 

type="password"
placeholder='Password'
name="password"
value={login.password}
onChange={handlePassword}
/>
<input type="button" value="Sign in" placeholder='Sign in'/> 
<div className='signup'>
    Don't have an account? <Link to="/signup"> Create one now</Link>
</div>




</div>

)




}