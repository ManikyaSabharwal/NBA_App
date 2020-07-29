import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='three colums'>
                        <Link to='/' className='logo'>
                            <span></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
