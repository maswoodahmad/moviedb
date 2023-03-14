import Card from "./card";
import './vanlife.css'
import {car} from './data'
import { Link,Route,Routes, useParams} from "react-router-dom";
import Description from "./carDes";

export default function Vans(){

console.log(car);
// const {url}= useRoutes();
const {params}=useParams();
console.log(params);
return(

<div className="vanlife">
    
    
     <p> Explore our van options</p>
            <ul  className="filter">
                <li>
                    Simple
                </li>
                <li>
                    Rugged
                </li>
                <li>
                    Luxary
                </li>
                <li>
                    Clear filters
                </li>
            </ul>
            <ul className="items">
            {
              car.map(e=>{
    
   return (
     <Link to={`/vans/${e.url}`} >
      <Card 
         key={e.name}
         color={e.color}
          src={e.src}
          name={e.name}
          price={e.price}
          type={e.type}
          />
   </Link>
   )
  
})
}
</ul>






</div>



)






}