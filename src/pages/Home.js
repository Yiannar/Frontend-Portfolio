import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Link to='/diamonds'>
                <h1>Hello</h1>
            </Link>
            
        </div>
    );
};

export default Home;