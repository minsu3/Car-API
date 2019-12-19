import React from 'react'
import { NavLink, Switch } from 'react-router-dom';

function Nav() {
    return(
    <div className='nav'>
            <nav>
                <NavLink to={'/'} className='linked' activeClassName="activate">API documentation</NavLink>
            </nav>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">

                <a href="#"><li><nav >
                <NavLink to={'/index'} className="link" activeClassName="active">All Customers</NavLink>
                </nav></li></a>

                <a href="#"><li><nav>
                    <NavLink to={'/detail'} className="link" activeClassName="active">Single Customer</NavLink>
                </nav></li></a>
                <a href="#"><li><nav>
                            <NavLink to={'/create'} className="link" activeClassName="active">Create Customer</NavLink>
                </nav></li></a>
                <a href="#"><li><nav>
                            <NavLink to={'/update'} className="link" activeClassName="active">Update Customer</NavLink>
                </nav></li></a>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Nav;