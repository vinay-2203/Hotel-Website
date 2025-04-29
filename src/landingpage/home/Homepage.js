import React from 'react';
import Hero from './Hero'
import Member from './Member'
import Stay from './Stay';
import Discover from './Discover';

function Homepage() {
    return ( 
        <div>
            <Hero/>
            <Member/>
            <Stay></Stay>
            <Discover></Discover>
        </div>
     );
}

export default Homepage;