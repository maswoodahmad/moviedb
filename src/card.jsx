import { Link } from "react-router-dom";

export default function Card(props){
const{ color,src,name, price , type}=props;



return(
    
<li className="card">
    
            <img src={src} alt="van"/>
            <div className="info" >
       
           <span> {name}</span>
          <div className="sp">
              <span style={{backgroundColor:color} }>{type}</span>
           <span> ${price}/day</span>
           </div>
           </div>
            
           
           
          
            

           
</li>


    
)




}