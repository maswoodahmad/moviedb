import { Link } from "react-router-dom";
import './Host.css'
import VanCard from "./VanCard";
import {car } from "./data";
export default function Host(){


console.log(car)

return(
<div className="host">




        <ul className="dashboard">
        

                <li><Link to="/"> Dashboard </Link></li>
                <li><Link to="/">Income </Link></li>
                <li><Link to="/">Vans</Link></li>
                <li><Link to="/">Reviews</Link></li>
        </ul>
  
  <div className="welcome">
<p> Welcome!</p> <p></p>
<p>Income in last <span>30 days</span></p> <p> Details</p>
<p>$2,260</p> <p></p>
  </div>
  <div className="reviews">
    <p> Review score * 5.0/5 </p> <p> Details</p>
  </div>
  <div className="vans">
    <p> Your listed vans</p> <p>View all</p>
    <ul className="van-grid">
     {car.map(e=>{
        return (<VanCard key={e.url} name={e.name} price={e.price} src={e.src}/>)
        
     })}



    </ul>
  </div>
</div>











)


}