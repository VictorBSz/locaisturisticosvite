import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"
import Logo from '../../assets/earth.png'

const Nav = () => {
  return (
    <header>
      <nav>
          <ul className="horizontal-nav">
              <h1><NavLink to="#"><img className='logo' src={Logo} alt="" /></NavLink></h1>
              <li class='link'><NavLink to="/sydney">Outras Viagens!</NavLink></li>
              <li class= 'link'><NavLink to="#">Créditos</NavLink></li>
          </ul>
      </nav>
    </header>
  );
};

export default Nav;