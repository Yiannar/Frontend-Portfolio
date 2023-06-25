import react from "react";
import { Link } from "react-router-dom";
import '../Css/diamondList'



const Diamond =({diamond})=>{
    return(
        <div className="list">
             <Link to={`/diamonds/${diamond.id}`}>
            <h1 className="shape">{diamond.shape}</h1>
            </Link>

            <img className= 'name'src={diamond.image} alt='diamonds'></img>
           
        
        </div>
    )
};

export default Diamond;