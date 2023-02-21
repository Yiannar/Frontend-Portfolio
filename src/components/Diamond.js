import react from "react";
import { Link } from "react-router-dom";
import './Diamond.css'



const Diamond =({diamond})=>{
    return(
        <section className="diamonds">
             <Link to={`/diamonds/${diamond.id}`}>
            <h1 className="shape">{diamond.shape}</h1>
            </Link>

            <img src={diamond.image} alt='diamonds'></img>
           
        
        </section>
    )
};

export default Diamond;