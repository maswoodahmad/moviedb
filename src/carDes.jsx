import { Link,useParams} from "react-router-dom"
import './van.css';
import {car} from './data'
import { type } from "@testing-library/user-event/dist/type";

export default function Description(){
    let props={
        name:"common",
        src:"something",
        type:"fg",
        sum:"some text",
        price:30
    
    
    } 
const params=useParams();
 props= car?.find(e=>{
    return e.url==params.topic
} );






return(
    <div className="description">
        
        <Link to="/vans"> &#x2190; Back to all Vans</Link>
        <div className="inner-description">
            <img src={props.src} alt="" className="image" />
           <div> <p style={{backgroundColor:props.color}} className="type">
                {props.type}
            </p>
            <p className="name">
                {props.name}
            </p>
            <p className="price">
               ${props.price}/day
            </p>
            <p className="summary">{props.sum}</p>
            <button className="action">Rent this van</button> 
            </div>
       </div>
</div>





)





}