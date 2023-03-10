import React from 'react';
import { useState, useEffect } from "react";
import Diamond from './Diamond';
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Diamonds = () => {
    const [diamonds, setDiamonds] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}/diamonds`)
        .then((res)=>{
            // console.log(res.data)
            setDiamonds(res.data);
        })
        .catch((c) => console.warn("catch", c))
    }, [])

    return (
        <div className='diamonds'>
            {diamonds.map((diamond) => {
                return ( <Diamond key={diamond.id} diamond={diamond} />)
               
            })}
        </div>
    );
};

export default Diamonds;