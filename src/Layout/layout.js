import React from 'react';
import logoFacebook from '../logo/logoFacebook.png';
import logoRestau from '../logo/logoRestau.png'
import { Link } from 'react-router-dom';
import './layout.css';

export default function Layout(props) {
  return (
    <div>
      <header>
        <div className="menu">
          <img src={logoRestau} alt="Restau Logo" class="menu-logo"/>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/boisson">Boisson</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <div className="footer">
          <a href="https://www.facebook.com/LaTableDeChantal/?locale=fr_FR" target="_blank">
            <img src={logoFacebook} alt="Facebook Logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}
