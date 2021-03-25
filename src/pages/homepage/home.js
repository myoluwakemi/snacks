import React from 'react';

import Banner from '../../components/Banner';
import About from '../../components/About'
import Directory from '../../components/directory/directory';
import Contact from '../../components/contact'
import '../homepage/home.css'
import Review from '../../components/review/review';




function Home (){
    return(
        <div className="homepage">
            <Banner/>
            <About/>
            <div className="home-directory pad">
            <Directory/>
            </div>
            <Contact/>
            <Review/>
            
            
        </div>

    )
}
export default Home