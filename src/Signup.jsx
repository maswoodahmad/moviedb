import { useState } from "react"
import { Link } from "react-router-dom"
import LoginPanel from "./Loginapanel"
import './signup.css'
export default function Signup(){
const[ sign ,setSign]= useState({
    name:"",
    email:"",
    password:"",
    confirmedPassword:"",
    
})
const handleChange=(e)=>{
    e.preventDefault();
    const eventName= e.target.name;
    const eventvalue= e.target.value;
    setSign(
        {...sign,
        [eventName]:eventvalue
        }
    )
  
}
console.log(sign);

return(

<div className="sign">
<h1> Sign  up</h1>
<LoginPanel/>
<p>Or register with an email</p>
<input 
type="text"
name="name"
value={sign.name}
placeholder="Name"
onChange={handleChange}
/>
<input 
type="email"
name="email"
value={sign.email}
placeholder="Email"
onChange={handleChange}
/>
<input 
type="password"
name="password"
value={sign.password}
placeholder="Password min 8 characters"
onChange={handleChange}
/>
<input 
type="text"
name="name"
value={sign.confirmedPassword}
placeholder="Enter your password again"
onChange={handleChange}
/>
<input
type="button"
name="submit"
value="Sign Up"
/>

<div className="already">
    Already have an account? <Link to="/login">Sign in</Link>
</div>



</div>





)

}