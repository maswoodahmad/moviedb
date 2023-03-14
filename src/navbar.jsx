import { Link } from "react-router-dom";
import User from "./loog";
import Login from "./Login";
export default function Navbar(){
    return(

<>
<ul className="navbar">
    <Link to="/">
    <li>#VANLIFE</li>
    </Link>
    <Link to="/host">
        <li>
        Host
        </li>
    </Link>
    <Link to="/about"><li> About</li></Link>
    
    <Link to="/vans">
                      <li> VANS</li> </Link>
    <Link to="/login"><li> <User/></li></Link>
   
   
  
    
</ul>
</>
    )
}