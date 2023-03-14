import './signup.css'
import { Link } from 'react-router-dom'
export default function Error(){

return(

    <div className="error">
    <h1> Sorry, the page you are looking for was not found</h1>
    <Link to="/"><button> Back to home</button></Link>
    </div>
)


}