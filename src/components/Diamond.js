import react from "react";
import { Link } from "react-router-dom";



const Diamond =({diamond})=>{
    return(
        <section>
            <Link to={`/diamonds/${diamond.id}`}>
            <h1>{diamond.shape}</h1>
            </Link>

            {/* <img className="diamond-img" src={diamond.image} alt='Diamond-Image'> </img> */}
        </section>
    )
};

export default Diamond;