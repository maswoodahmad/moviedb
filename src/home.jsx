
import { Link } from "react-router-dom"
export default function Home(){


    
    return(
    <>

   <div className="home">
   <p>You got the travel plans, we got the travel Vans</p>
   <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
   <Link to="/vans"><button>Find Your Van</button></Link>
    
   
    </div>



</>




    )
}