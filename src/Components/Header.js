import React from 'react';
import {NavLink, Outlet} from "react-router-dom";


function Header({categories}) {
    return (
        <div>
            <header>
                <div className='logo'>STORE</div>
                <nav className='nav'>
                    <NavLink className='nav-link' to={'/'}>Home</NavLink>
                    <div className='dropdown-menu'>
                        <div className='nav-link categories-link'>Categories</div>
                        <div className='dropdown-menu-content'>
                            {categories.map(category =>
                                <NavLink className='category' to={`/category/:${category}`} state={{category: category}}>
                                    {category}
                                </NavLink>
                            )}
                        </div>
                    </div>
                    <NavLink className='nav-link' to={'/cart'}>Cart</NavLink>
                </nav>
            </header>
            <Outlet/>
        </div>
    );
}

export default Header;