import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = (props) => {


    return (
        // <nav classNameName="nav-wrapper red darken-3">
        //   <div classNameName="container">
        //     <Link classNameName="brand-logo" to="/">Poke' Times</Link>
        //     <ul classNameName="right">
        //       <li><NavLink exact to="/">Home</NavLink></li>
        //       <li><NavLink to='/about'>About</NavLink></li>
        //       <li><NavLink to='/contact'>Contact</NavLink></li>
        //     </ul>
        //   </div>
        // </nav>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/todo'>Todo</NavLink>
                </li>
               
               
            </ul>
        </nav>
    )
}
export default Nav