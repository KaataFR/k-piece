import React from "react";
import "./Tuile.css"

function Tuile({ mangas }) {
  return (
    <div className="tuile">
      <img src={mangas.image} alt={mangas.alt} width= "145px"height= "198px" />
      <h3>{mangas.name}</h3>
      <p>Chapitre {mangas.length}</p>
      <div className="tuile-rating">
        {Array.from({ length: mangas.rating }, (_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
    </div>
  );
}

export default Tuile;
