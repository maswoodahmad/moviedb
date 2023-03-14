
import { Route ,Routes} from 'react-router';
import './App.css';
import Footer from './footer';
import Home from './home'
import Navbar from './navbar';
import About from './About';
import Vans  from './Vans';
import Description from './carDes';
import Login from './Login';
import Signup from './Signup';
import Error from './Error';
import Host from './Host';

function App() {
  return (
    <div className="App">
   
         <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>} />
<Route path='/vans' element={<Vans/>}/>
<Route path='/vans/:topic' element={<Description/>}/>
<Route path="/login" element={ <Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path="*" element ={<Error/>}/>
<Route path="host" element ={<Host/> }/>

</Routes>
    
    </div>
  );
}

export default App;
