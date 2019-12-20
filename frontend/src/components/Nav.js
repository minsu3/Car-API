import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    return(
    <div className='nav'>
            <nav>
                <span>
                    <NavLink to={'/'} className='linked' activeClassName="activate">API documentation</NavLink>
                </span>

                {/* <span>
                    <NavLink to={'/'} className='linked' activeClassName="activate">API documentation</NavLink>
                </span> */}
            </nav>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">

                <a href="#"><li><nav >
                <NavLink to={'/index'} className="link" activeClassName="active">Get All Customers</NavLink>
                </nav></li></a>

                <a href="#"><li><nav>
                    <NavLink to={'/detail'} className="link" activeClassName="active">Get One Customer Information</NavLink>
                </nav></li></a>
                <a href="#"><li><nav>
                            <NavLink to={'/create'} className="link" activeClassName="active">Create Customers</NavLink>
                </nav></li></a>
                <a href="#"><li><nav>
                            <NavLink to={'/update'} className="link" activeClassName="active">Update Customers</NavLink>
                </nav></li></a>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Nav;