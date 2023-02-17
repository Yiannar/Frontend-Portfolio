import React from 'react';
import { useState } from "react";
import Diamond from './Diamond';



function Cart({diamond}) {

  let realTotal = diamond.reduce((acc,currentValue)=>acc + currentValue.amount, 0)


    return (
        <div>
            <h1 className='diamond'>diamond</h1>
            <h4>Total:${diamond.length >= 3 ? (0.90 * realTotal) : realTotal }</h4>
            <h6>Discount: {diamond.length < 3 ? (0) : (10)}%</h6>
            {
                diamond.map((diamond)=>{
                    return(
                      <ol>
                            <li >{diamond.name}: {diamond.price}</li>
                            {/* <button onClick={()=> removeData()}>Delete</button> */}
                            </ol>
                    )
                })
            }
       
        </div>
    );
}

export default Cart;