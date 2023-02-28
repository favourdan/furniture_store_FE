import React from 'react';
import BackToTop from './components/Home/BackToTopButton';
import Footer from './components/Home/Footer';
import Navbar from './components/Home/Navbar';
import HomePage from './components/Home/Hompage';

function App(){
    return(
        <div>
            <Navbar />
            <div>
                <div>
                    <HomePage />
                </div>
            </div>
            <BackToTop />  
            <Footer />        
        </div>  
    ); 
}

export default App;