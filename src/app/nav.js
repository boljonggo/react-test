import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () =>(
    <div>
        <NavLink exact to='/'>Jsdemoa</NavLink> |&nbsp;
        <NavLink to='/Jsdemob'>Jsdemob</NavLink> |&nbsp;
        <NavLink to='/Jsdemoc'>Jsdemoc</NavLink>
    </div>
);
export default NavBar;

