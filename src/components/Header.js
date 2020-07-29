import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='three columns'> 
                        <Link to='/' className='logo'>
                            <span></span>
                        </Link>
                    </div>
                </div>
                <div className='nine colums'>
                    <nav>
                        <Link to='/teams'>Teams</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
