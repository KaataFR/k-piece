import React from "react";
import "./Header.css";

function Header(logo) {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo">
          <img src={logo.image} alt="Logo" width="50px"  height="50px"/>
        </div>
        <h1> K-PIECE </h1>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/all-mangas">Tous les mangas</a>
            </li>
          </ul>
        </nav>
        <div className="header-search">
          <input type="text" placeholder="Rechercher" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
