
import '../Header/StyleHeader.css';
import logo from './glass.svg';
import {Link, } from 'react-router-dom';
import { useState,useEffect, } from 'react';

const Header =() => {
   
    const[show,setShow] = useState(false);
    useEffect (window.onscroll = () => {
        setShow(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    })
    return (
        <header className={show ? "fixed" : "header"}>
        
            <section className="Header-logo">
            <Link to ="/"><img src={logo} alt="Logo" /></Link>
            </section>
            <section className="Header-register">
                <div>
                        <Link to="/"><button>Logout</button></Link>
               </div>
                <div>
                      <Link to ="register"><button>Registrate</button></Link>

                </div>
            </section>
        </header>
    )
};
export default Header;