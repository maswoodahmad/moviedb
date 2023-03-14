import { Link } from 'react-router-dom'
import './Vancard.css'
import { car } from './data'
export default function VanCard(props){



return(

    <li className="container">
        <img src={props.src} alt="van image"/>
        <div className="des">
       <p> {props.name}</p>
       <p> ${props.price}/Day</p>

             </div>
  <p><Link to="/">Edit</Link></p>

</li>
)

}