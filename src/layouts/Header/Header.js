import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ logo }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/all-mangas?search=${searchTerm}`);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="header">
      <div className="header-wrapper">
      <Link to="/" className="header-link">
        <div className="header-logo">
          <img src={logo} alt="Logo" width="50px" height="50px" />
        </div>
        <h1>K-PIECE</h1>
       </Link>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/all-mangas">Tous les mangas</Link>
            </li>
          </ul>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="header-search">
            <input type="text" placeholder="Rechercher" value={searchTerm} onChange={handleChange} />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
