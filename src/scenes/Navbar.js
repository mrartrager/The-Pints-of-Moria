import React from 'react';

function Navbar({ currentPage, handlePageChange}) {
    return (    
             <div className="">
                <nav className="">
                    <ul className="nav nav-tabs">
                <li className="">
                    <a 
                    href="#beers" onClick={()=> handlePageChange('Beers')}
                    className={currentPage === 'Beers' ? 'nav-link active' : 'nav-link'}>Beers</a>
                </li>

                <li className="">
                    <a 
                    href="#events" onClick={()=> handlePageChange('Events')}
                    className={currentPage === 'Events' ? 'nav-link active' : 'nav-link'}>Events</a>
                </li>

                <li className="">
                    <a 
                    href="#about" onClick={()=> handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                </li>

                <li className="">
                    <a 
                    href="#contact" onClick={()=> handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>

                <li className="">
                    <a 
                    href="#merch" onClick={()=> handlePageChange('Merch')}
                    className={currentPage === 'Merch' ? 'nav-link active' : 'nav-link'}>Merch</a>
                </li>

                    </ul>
                </nav>
             </div> 
    )
};



export default Navbar