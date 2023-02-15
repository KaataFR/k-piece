import React from "react";
import { Link } from "react-router-dom";
import "./Tuile.css";

function Tuile({ mangas }) {
  return (
    <div className="tuile">
      <Link to={`/${mangas.name}/${mangas.scans[0]}`}>
        <img src={mangas.image} alt={mangas.alt} width="145px" height="198px" />
        <h3>{mangas.name}</h3>
        <p>Chapitre {mangas.scans[0]}</p>
        <div className="tuile-rating">
          {Array.from({ length: mangas.rating }, (_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default Tuile;
