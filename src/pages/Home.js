import React from 'react';
import { Link } from 'react-router-dom'
import '../Css/Home'


const Home = () => {
    return (
        <div>
            <Link to='/diamonds'>
                <h1 className="text-3xl font-bold underline">Welcome to the Diamonds App</h1>
                <img className='homeImg' src='https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZHN8ZW58MHx8MHx8&w=1000&q=80' alt=' diamondbackground'></img>
            </Link>
            
        </div>
    );
};

export default Home;